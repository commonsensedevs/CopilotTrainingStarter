import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { IProduct } from './Product';

describe('ProductService', () => {
    let service: ProductService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ProductService]
        });

        service = TestBed.inject(ProductService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify(); // Make sure that there are no outstanding requests.
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should retrieve products from the API via GET', () => {
        const dummyProducts: IProduct[] = [
            { ProductName: 'Product 1', ProductCode: 'P1', ProductPrice: 100 },
            { ProductName: 'Product 2', ProductCode: 'P2', ProductPrice: 200 }
        ];

        service.getProducts().subscribe(products => {
            expect(products.length).toBe(2);
            expect(products).toEqual(dummyProducts);
        });

        const request = httpMock.expectOne('http://localhost:3000/products');

        expect(request.request.method).toBe('GET');

        request.flush(dummyProducts); // Provide dummy values as the response.
    });
});