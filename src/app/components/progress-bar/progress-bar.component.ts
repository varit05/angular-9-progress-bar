import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input('value') value: string = '0';
  @Input('color') color: string;
  @Input('large') large: boolean = false;
  public start: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.color = this.color || '#2bc253';
    this.renderText();
  }

  ngOnChanges(changes: SimpleChanges) {
    const { value } = changes;
    console.log('value', value);
    if (!value.firstChange) {
      this.start = 0;
      this.renderText();
    }
  }

  public renderProgress(progress: string) {
    try {
      const value = Math.round(+progress * 100) / 100;
      return value < 100 ? value : 100;
    } catch {
      return progress;
    }
  }

  private renderText() {
    const currentProgress = this.renderProgress(this.value);
    if (currentProgress > this.start) {
      let timer = setInterval(() => {
        this.start += 1;
        if (this.start >= currentProgress) {
          clearInterval(timer);
        }
      }, 50);
    }
  }
}
