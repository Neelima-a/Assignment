import { describe, it, expect } from 'vitest';

import { groupProductsByCategory } from '../utils/productUtils';

import type { Product } from '../types/product';

const testProducts: Product[] = [
  {
    id: 1,
    title: 'Product A',
    price: 100,
    description: 'Test A',
    category: 'electronics',
    image: 'image-a',
    rating: { rate: 3.5, count: 10 }
  },
  {
    id: 2,
    title: 'Product B',
    price: 200,
    description: 'Test B',
    category: 'electronics',
    image: 'image-b',
    rating: { rate: 4.8, count: 20 }
  }
];

describe('groupProductsByCategory', () => {

  it('groups products by category', () => {
    const result = groupProductsByCategory(
      testProducts,
      ['electronics']
    );

    expect(result.electronics).toHaveLength(2);
  });

  it('sorts products by rating descending', () => {
    const result = groupProductsByCategory(
      testProducts,
      ['electronics']
    );

    expect(result?.electronics?.[0]?.rating.rate).toBe(4.8);
    expect(result?.electronics?.[1]?.rating.rate).toBe(3.5);
  });

  it('returns empty arrays for categories without products', () => {
    const result = groupProductsByCategory(
      testProducts,
      ['jewelry']
    );

    expect(result.jewelry).toEqual([]);
  });
});