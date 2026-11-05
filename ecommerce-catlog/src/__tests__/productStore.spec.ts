import { describe, it, expect, vi, beforeEach } from 'vitest';

import { createPinia, setActivePinia } from 'pinia';

import { useProductStore } from '../stores/productStore';

import { productService } from '../services/productService';

import type { Product } from '../types/product';

vi.mock('../services/productService', () => ({
  productService: {
    getProducts: vi.fn(),
    getCategories: vi.fn(),
    getProductById: vi.fn()
  }
}));

const mockProducts: Product[] = [
  {
    id: 1,
    title: 'Laptop',
    price: 1000,
    description: 'Laptop description',
    category: 'electronics',
    image: 'image.jpg',
    rating: {
      rate: 4.5,
      count: 100
    }
  }
];

describe('Product Store', () => {

  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
  });

  it('initializes with empty state', () => {
    const store = useProductStore();

    expect(store.products).toEqual([]);
    expect(store.categories).toEqual([]);
    expect(store.loading).toBe(false);
    expect(store.error).toBe(null);
  });

  it('fetches products and categories successfully', async () => {
    vi.mocked(productService.getProducts)
      .mockResolvedValue(mockProducts);

    vi.mocked(productService.getCategories)
      .mockResolvedValue(['electronics']);

    const store = useProductStore();

    await store.fetchProducts();

    expect(store.products).toEqual(mockProducts);

    expect(store.categories).toEqual(['electronics']);

    expect(store.loading).toBe(false);

    expect(store.error).toBe(null);
  });

  it('handles API failure', async () => {
    vi.mocked(productService.getProducts)
      .mockRejectedValue(new Error('Network error'));

    const store = useProductStore();

    await store.fetchProducts();

    expect(store.error).toBe('Network error');

    expect(store.loading).toBe(false);
  });

  it('returns product by ID', async () => {
    const store = useProductStore();

    store.products = mockProducts;

    const product = store.getProductById(1);

    expect(product).toEqual(mockProducts[0]);
  });

  it('returns undefined for an unknown product ID', () => {
    const store = useProductStore();

    expect(store.getProductById(999)).toBeUndefined();
  });

});