import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import http from '../src/http/index.js'

Vue.config.productionTip = false

//inserindo o axios em uma instancia global do vue
Vue.prototype.$http = http;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


// PARA RODAR O BACK npm run start-auth