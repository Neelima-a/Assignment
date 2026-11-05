import type{Product, ProductRating} from '../types/product';

const BASE_URL = 'https://fakestoreapi.com';

export async function fetchAPI<T>(url:string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
    }
    return response.json() as Promise<T>;
}

export const productService = {
    getProducts: () => fetchAPI<Product[]>(`${BASE_URL}/products`),
    getProductById: (id: number) => fetchAPI<Product>(`${BASE_URL}/products/${id}`),
    getCategories: () => fetchAPI<string[]>(`${BASE_URL}/products/categories`),
    getRatings: () => fetchAPI<ProductRating[]>(`${BASE_URL}/ratings`)
};