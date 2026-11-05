import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
      path: '/',
      name: 'dashboard',
      component: () =>import('../views/ProductDashboard.vue')
    },
    {
      path: '/product/:id',
      name: 'product-details',
      component: () => import('../views/ProductDetails.vue'),
      props: true
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue')
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes  
});

export default router;
