import { Injectable } from '@angular/core';
import { IProduct } from './Product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
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

      //Get All Products
    getProducts(): IProduct[] {
        return this.products;
    }
      //Add Product
    addProduct(product: IProduct): void {
        this.products.push(product);
    }

    getProductByCode(productCode: string): IProduct | undefined {
        return this.products.find(p => p.ProductCode === productCode);
    }

    //Update Product by ProductCode
    updateProduct(productCode: string, product: IProduct): void {
        const index = this.products.findIndex(p => p.ProductCode === productCode);
        if (index !== -1) {
            this.products[index] = product;
        }
    }
    //Delete Product by ProductCode
    deleteProduct(productCode: string): void {
        const index = this.products.findIndex(p => p.ProductCode === productCode);
        if (index !== -1) {
            this.products.splice(index, 1);
        }
    }
}
