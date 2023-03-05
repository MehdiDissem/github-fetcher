import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import '@/assets/global.css' // import global styles


createApp(App).use(router).mount('#app')