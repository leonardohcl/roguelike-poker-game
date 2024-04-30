import { createApp } from 'vue'
import './styles/main.scss'
import App from './App.vue'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')