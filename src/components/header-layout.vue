<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Delivery</router-link>
      <div class="collapse navbar-collapse">
        <div class="navbar-nav">
          <a href="" class="nav-link disabled">Restaurants</a>
          <a href="" class="nav-link disabled">Clients</a>
          <router-link to="/products" class="nav-link">Products</router-link>
          <a href="" class="nav-link disabled">Orders</a>
        </div>
        <div class="navbar-nav ms-auto mb-2 mb-lg-0">
          <a href="" class="nav-link">Sair</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'HeaderLayout'
}
</script>

<script setup lang="ts"></script>
