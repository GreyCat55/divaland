import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@flaticon/flaticon-uicons/css/all/all.css'

const app = createApp(App)

axios.defaults.withCredentials = true
app.use(VueAxios, axios)
app.use(router)

app.mount('#app')
