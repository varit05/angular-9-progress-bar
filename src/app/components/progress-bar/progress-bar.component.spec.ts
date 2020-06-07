import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync
} from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';

import { ProgressBarComponent } from './progress-bar.component';
import { By } from '@angular/platform-browser';

describe('ProgressBarComponent', () => {
  let component: ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressBarComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default color', () => {
    expect(component.color).toBe('#2bc253');
  });

  it('should have a progress', () => {
    expect(component.progress).toBe('0');
  });

  it('should check paragraph element and return 0%', () => {
    const pEle = debugElement.query(By.css('p')).nativeElement;
    expect(pEle.textContent).toBe('We already sold 0 % of our products');
  });

  it('should check check paragraph element and return 1%', async(() => {
    const pEle = debugElement.query(By.css('p')).nativeElement;
    fixture.whenStable().then(() => {
      component.progress = '1';
      fixture.detectChanges();
      expect(pEle.textContent).toBe('We already sold 1 % of our products');
    });
  }));
});
