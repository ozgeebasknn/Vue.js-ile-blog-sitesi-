import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/style.css"
import Vuelidate from "vuelidate"

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  data:() => ({
    active: 'home',
    activeSidebar: false
  }),
  router,
  store,
  render: h => h(App)
}).$mount('#app')
