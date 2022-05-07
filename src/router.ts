import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/home/home.vue'
import Products from './pages/products/products.vue'
import Product from './pages/product/product.vue'
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
      path: '/products/new',
      name: 'New product',
      component: Product
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
