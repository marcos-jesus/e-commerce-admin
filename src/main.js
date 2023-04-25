import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

const app = createApp(App)
app.use(ElementPlus)

app.component('fa', FontAwesomeIcon)
app.mount('#app')