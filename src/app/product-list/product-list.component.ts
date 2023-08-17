import { Component } from '@angular/core';
import { products } from '../products';
import { TopBarComponent } from '../top-bar/top-bar.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [...products];
  constructor(private TopBarComponent: TopBarComponent) {}
  share() {
    window.alert('Added to cart');
    this.TopBarComponent.added();
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
