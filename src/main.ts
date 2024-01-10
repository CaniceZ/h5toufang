import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Toast
import 'vant/es/toast/style';
// Dialog
import 'vant/es/dialog/style';
// Notify
import 'vant/es/notify/style';
// ImagePreview
import 'vant/es/image-preview/style';
import 'amfe-flexible'
const app = createApp(App)

app.use(router)
app.mount('#app')
