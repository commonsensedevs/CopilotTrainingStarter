import { Component, OnInit } from '@angular/core';
import { IProduct } from './Iproduct';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 
    products: IProduct[] = [
        {
          ProductName: 'Product 1',
          ProductCode: 'P1',
          ProductPrice: 100
        },
        {
          ProductName: 'Product 2',
          ProductCode: 'P2',
          ProductPrice: 200
        },
        {
          ProductName: 'Product 3',
          ProductCode: 'P3',
          ProductPrice: 300
        }
      ];
    constructor() { }

    ngOnInit(): void {
    }
}