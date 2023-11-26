//Create IProduct iterface with ProductName, ProductCode and ProductPrice properties
/**
 * Represents a product.
 */
export interface IProduct {
    /**
     * The name of the product.
     */
    ProductName: string;
    /**
     * The code of the product.
     */
    ProductCode: string;
    /**
     * The price of the product.
     */
    ProductPrice: number;
}