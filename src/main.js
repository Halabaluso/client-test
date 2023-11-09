import { firebaseConfig } from '../src/variables/secret'

import './assets/main.css'

import { initializeApp } from 'firebase/app'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(initializeApp(firebaseConfig))
app.use(router)

app.mount('#app')
