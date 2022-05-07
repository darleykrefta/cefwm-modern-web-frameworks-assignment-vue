<template #fallback>
  <form @submit.prevent="onSubmit">
    <div class="form-row">
      <div class="form-group col-12">
        <label for="name">name</label>
        <input class="form-control" id="name" placeholder="Insert the product name" v-model="formValues.name" />
      </div>
      <div class="form-group col-4">
        <label for="price">Price</label>
        <input
          type="number"
          class="form-control"
          id="price"
          placeholder="Insert the product price"
          v-model="formValues.price"
        />
      </div>
    </div>
    <div class="col-12 d-flex justify-content-end">
      <button class="btn btn-outline-secondary" @click="onBack">Back</button>
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
</template>

<script lang="ts">
export default {
  name: 'Products'
}
</script>

<script setup lang="ts">
import { ref } from 'vue'

import { Product } from '../../types/product'
import { getAllProducts, postProduct } from '../../services/products'
import router from '../../router'

let products = ref<Product[]>([])

const formValues = ref({ name: '', price: 0 })

products.value = await getAllProducts()

function onBack() {
  router.push({ path: '/products' })
}

async function onSubmit(e: Event) {
  try {
    e.preventDefault()
    await postProduct(formValues.value as Product)
    router.push({ path: '/products' })
  } catch (error) {
    alert('Error on insert product')
  }
}

defineExpose({
  products
})
</script>
