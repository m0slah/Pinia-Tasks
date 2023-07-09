
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import '../asset/main.css'

createApp(App).use(createPinia()).mount('#app')
