import { createApp } from 'vue'
import './style.css'
import { createAirDatepicker } from 'vue-air-datepicker'
import App from './App.vue'

const vai = createAirDatepicker()

createApp(App).use(vai).mount('#app')
