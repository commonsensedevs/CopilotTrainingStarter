import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 
    //Create a products array with ProductName, ProductCode and ProductPrice properties
    products = [
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
        },
        {
            ProductName: 'Product 4',
            ProductCode: 'P4',
            ProductPrice: 400
        }
    ];
    constructor() { }

    ngOnInit(): void {
    }
}