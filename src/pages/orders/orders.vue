<template>
  <div class="row">
    <div class="items col-7">
      <Products></Products>
    </div>
    <div class="items col-4">
      <div class="row">
        <div class="col-7">
          <h4>Pedido</h4>
        </div>
        <div class="col-5 text-end">{{ store.order.total }}</div>
      </div>
      <hr />
      <div class="row" v-for="item in store.order.items" v-bind:key="item.uuid">
        <div class="col-1">{{ item.quantity }}</div>
        <div class="col-7">{{ item.product.name }}</div>
        <div class="col-4 text-end">{{ item.total }}</div>
      </div>
      <button class="btn btn-outline-success">
        create
        <span class="fa fa-check"></span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Products from '../products/products.vue'
export default {
  name: 'Orders',
  components: { Products }
}
</script>

<script setup lang="ts">
import { useOrderStore } from '../../stores/order-store'
const store = useOrderStore()
defineExpose({
  store
})
</script>
