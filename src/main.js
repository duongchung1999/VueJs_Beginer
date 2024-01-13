import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const app = createApp(App).use(router)
app.use(VueAxios, { $request: axios})// or app.use() for Vue 3 Optiona API
app.use(VueSweetalert2)
app.mount('#app')
