import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import type { Product } from '../types/product';

import ProductCard from '../components/ProductCard.vue'
import { createRouter, createMemoryHistory } from 'vue-router'

const testProduct: Product = {
  id: 1,
  title: 'Wireless Headphones',
  price: 99.99,
  description: 'Premium headphones',
  category: 'electronics',
  image: 'https://example.com/headphones.jpg',
  rating: {
    rate: 4.5,
    count: 120
  }
};

async function createWrapper() {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      {
        path: '/product/:id',
        component: { template: '<div>Details</div>' }
      }
    ]
  });

  await router.push('/');
  await router.isReady();

  const wrapper = mount(ProductCard, {
    props: {
      product: testProduct
    },
    global: {
      plugins: [router]
    }
  });

  return wrapper;
}

describe('ProductCard.vue', () => {

  it('renders product title', async () => {
    const wrapper = await createWrapper();

    expect(wrapper.text()).toContain('Wireless Headphones');
  });

  it('renders product price', async () => {
    const wrapper = await createWrapper();

    expect(wrapper.text()).toContain('$99.99');
  });

  it('renders product rating', async () => {
    const wrapper = await createWrapper();

    expect(wrapper.text()).toContain('4.5');
  });

  it('renders product review count', async () => {
    const wrapper = await createWrapper();

    expect(wrapper.text()).toContain('120 reviews');
  });

  it('renders correct product image and alt text', async () => {
    const wrapper = await createWrapper();

    const image = wrapper.find('img');

    expect(image.attributes('src')).toBe(
      testProduct.image
    );

    expect(image.attributes('alt')).toBe(
      testProduct.title
    );
  });

  it('navigates to the correct product details route', async () => {
    const wrapper = await createWrapper();

    expect(
      wrapper.findComponent({ name: 'RouterLink' }).props('to')
    ).toBe('/product/1');
  });
});