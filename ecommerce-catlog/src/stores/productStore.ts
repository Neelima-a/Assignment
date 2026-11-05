import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { Product } from '../types/product';
import { productService } from '../services/productService';

export const useProductStore = defineStore(
  'product',
  () => {

    const products = ref<Product[]>([]);
    const categories = ref<string[]>([]);

    const loading = ref(false);
    const error = ref<string | null>(null);

    async function fetchProducts() {
      loading.value = true;
      error.value = null;

      try {
        const [productData, categoryData] =
          await Promise.all([
            productService.getProducts(),
            productService.getCategories()
          ]);

        products.value = productData;
        categories.value = categoryData;

      } catch (err) {
        error.value =
          err instanceof Error
            ? err.message
            : 'Something went wrong';

      } finally {
        loading.value = false;
      }
    }

    function getProductById(id: number) {
      return products.value.find(
        product => product.id === id
      );
    }

    return {
      products,
      categories,
      loading,
      error,
      fetchProducts,
      getProductById
    };
  }
);