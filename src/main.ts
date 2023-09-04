import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'view-ui-plus/dist/styles/viewuiplus.css'

createApp(App).use(store).use(router).mount('#app')
