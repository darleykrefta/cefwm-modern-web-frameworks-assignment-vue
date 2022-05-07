<template #fallback>
  <div class="list-group-item" v-for="product in products" :key="product.uuid">
    <div class="row">
      <div class="col-5">
        <h5>{{ product.name }}</h5>
      </div>
      <div class="col-4 text-end">
        <h5>R$ {{ product.price }}</h5>
      </div>
    </div>
  </div>
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

let products = ref<Product[]>([])

products.value = await getAllProducts()

defineExpose({
  products
})
</script>
