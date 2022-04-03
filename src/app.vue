<template>
  <HeaderLayoutVue />
  <div class="container mt-5">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ currentRouteName }}</h5>
        <div class="container">
          <Suspense>
            <template #default>
              <router-view></router-view>
            </template>
            <template #fallback> Loading... </template>
          </Suspense>
        </div>
      </div>
    </div>
  </div>
  <p></p>
</template>

<script lang="ts">
export default {
  computed: {
    currentRouteName() {
      return this.$route.name
    }
  }
}
</script>

<script setup lang="ts">
import HeaderLayoutVue from './components/header-layout.vue'

defineExpose({
  HeaderLayoutVue
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f8f9fa;
  width: 100%;
  height: 100vh;
}
</style>
