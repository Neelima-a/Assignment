<script setup lang="ts">
import type { Product } from '../types/product';
import ProductCard from './ProductCard.vue';

defineProps<{
  category: string;
  products: Product[];
}>();
</script>

<template>
  <section class="category-section">
    <h2>{{ category }}</h2>

    <div class="product-list">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>