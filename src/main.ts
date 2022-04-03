import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')
