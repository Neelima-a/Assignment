<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import { useProductStore } from '../stores/productStore';
import { productService } from '../services/productService';

import type { Product } from '../types/product';

const route = useRoute();
const productStore = useProductStore();

const product = ref<Product | null>(null);
const loading = ref(false);
const error = ref<string | null>(null);

const productId = computed(() => Number(route.params.id));

async function loadProduct() {
  if (!Number.isInteger(productId.value) || productId.value <= 0) {
    error.value = 'Invalid product ID';
    product.value = null;
    return;
  }

  loading.value = true;
  error.value = null;

  try {
    // First check the existing Pinia store
    const existingProduct =
      productStore.getProductById(productId.value);

    if (existingProduct) {
      product.value = existingProduct;
    } else {
      // Fetch directly if the product is not in the store
      product.value =
        await productService.getProductById(productId.value);
    }

  } catch {
    product.value = null;
    error.value = 'Unable to load product details.';
  } finally {
    loading.value = false;
  }
}

onMounted(loadProduct);

watch(productId, loadProduct);
</script>

<template>
  <main class="product-details">

    <RouterLink to="/">
      ← Back to products
    </RouterLink>

    <p v-if="loading" role="status">
      Loading product details...
    </p>

    <div v-else-if="error" role="alert">
      {{ error }}
    </div>

    <article v-else-if="product" class="details-layout">

      <img
        :src="product.image"
        :alt="product.title"
        class="details-image"
      />

      <div>
        <p>{{ product.category }}</p>

        <h1>{{ product.title }}</h1>

        <p class="price">
          ${{ product.price.toFixed(2) }}
        </p>

        <p>
          ★ {{ product.rating.rate }}
          ({{ product.rating.count }} reviews)
        </p>

        <h3>Description</h3>

        <p>{{ product.description }}</p>
      </div>

    </article>

  </main>
</template>