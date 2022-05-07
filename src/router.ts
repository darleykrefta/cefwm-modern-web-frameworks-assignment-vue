import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/home/home.vue'
import Products from './pages/products/products.vue'
import NotFound from './pages/not-found/not-found.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
