<script setup lang="ts">
import type { Product } from '../types/product';

defineProps<{
  product: Product;
}>();
</script>

<template>
  <article class="product-card">
    <RouterLink
      :to="`/product/${product.id}`"
      class="product-link"
    >
      <img
        :src="product.image"
        :alt="product.title"
        class="product-image"
        loading="lazy"
      />

      <h3>{{ product.title }}</h3>

      <p class="price">
        ${{ product.price.toFixed(2) }}
      </p>

      <div class="rating">
        <span aria-hidden="true">★</span>
        {{ product.rating.rate }}
        <span class="review-count">
          ({{ product.rating.count }} reviews)
        </span>
      </div>
    </RouterLink>
  </article>
</template>