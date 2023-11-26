// Purpose: Service for products. This service will be used by the product-list.component.ts to get the products from the server.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  /**
   * Retrieves the list of products from the server.
   * @returns An Observable that emits an array of IProduct objects.
   */
  getProducts() {
    return this.http.get<IProduct[]>('http://localhost:3000/products');
  }
}