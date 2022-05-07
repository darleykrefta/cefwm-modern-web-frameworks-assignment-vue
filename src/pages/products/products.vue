<template #fallback>
  <div class="d-flex justify-content-end">
    <button class="btn btn-outline-primary" @click="test">create product</button>
  </div>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(product, index) in products" :key="product.uuid">
        <th scope="row">{{ index }}</th>
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
export default {
  name: 'Products'
}
</script>

<script setup lang="ts">
import { ref } from 'vue'

import { Product } from '../../types/product'
import { getAllProducts } from '../../services/products'
import router from '../../router'

let products = ref<Product[]>([])

products.value = await getAllProducts()

function test() {
  router.push({ path: '/products/new' })
}

defineExpose({
  products
})
</script>
