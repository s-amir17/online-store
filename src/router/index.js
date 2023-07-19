import { createRouter, createWebHistory } from 'vue-router';
import ProductsView from '../views/ProductsView.vue';
import MainView from '../views/MainView.vue';
import OneProductView from '@/views/OneProductView';

const routes = [
   {
      path: '/',
      name: 'MainView',
      component: MainView,
   },
   {
      path: '/products',
      name: 'ProductsView',
      component: ProductsView,
   },
   {
      path: '/products/:id',
      name: 'OneProductView',
      component: OneProductView,
   },
   {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
