import type { Product } from '../types/product';

export function groupProductsByCategory(
  products: Product[],
  categories: string[]
): Record<string, Product[]> {

  const grouped: Record<string, Product[]> = {};

  categories.forEach(category => {
    grouped[category] = products
      .filter(product => product.category === category)
      .sort(
        (a, b) =>
          b.rating.rate - a.rating.rate
      );
  });

  return grouped;
}