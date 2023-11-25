import { Component, OnInit } from '@angular/core';
import { IProduct } from './Product';
import { ProductService } from './product.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    
    products: IProduct[] = [];

    constructor(private productService: ProductService) { }

    ngOnInit(): void {
        this.products = this.productService.getProducts();
    }
}