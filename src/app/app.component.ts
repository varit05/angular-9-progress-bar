import { Component, OnInit } from '@angular/core';
import cartData from '../assets/data.json';
import { Icart } from './interface/cart.interface.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'Angular Progress bar';
  public cart: Icart = cartData;
  public soldProductValuePercetage = 0;

  ngOnInit() {
    this.bootstrapComponent();
  }

  public bootstrapComponent(): void {
    const { data, totalValue } = this.cart;
    const soldValue = data.reduce((acc, product) => acc + product.cost, 0);
    this.soldProductValuePercetage = soldValue / totalValue;
  }

  public addItem() {
    this.cart.data.push({ name: 'product 3', cost: 500 });
    this.bootstrapComponent();
  }

  public deleteItem() {
    this.cart.data.pop();
    this.bootstrapComponent();
  }
}
