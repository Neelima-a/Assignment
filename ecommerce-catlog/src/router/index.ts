import { createRouter, createWebHistory } from 'vue-router'

import ProductDashboard from '../views/ProductDashboard.vue';
import ProductDetails from '../views/ProductDetails.vue';
import NotFound from '../views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: ProductDashboard
    },
    {
      path: '/product/:id',
      name: 'product-details',
      component: ProductDetails,
      props: true
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    }
  ]
});

export default router;
