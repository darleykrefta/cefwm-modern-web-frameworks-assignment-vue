<template #fallback>
  <div class="list-group-item" v-for="product in products" :key="product.uuid">
    <div class="row">
      <div class="col-5">
        <h5>{{ product.name }}</h5>
      </div>
      <div class="col-4 text-end">
        <h5>R$ {{ product.price }}</h5>
      </div>
      <div class="col-3 text-end">
        <button class="btn btn-outline-info btn-sm" @click="add(product)">
          <span class="fa fa-plus"></span>
        </button>
        <button class="btn btn-outline-info btn-sm" @click="remove(product)" style="margin-left: 5px">
          <span class="fa fa-minus"></span>
        </button>
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

import { useOrderStore } from '../../stores/order-store'

let products = ref<Product[]>([])

products.value = await getAllProducts()

const store = useOrderStore()

const add = (product: Product) => store.addItem(product)

const remove = (product: Product) => store.removeItem(product)

defineExpose({
  products,
  add,
  remove
})
</script>
