import Vue from 'vue'
import App from './App.vue'
import router from './router'
import provedor from './provedor'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import http from '../src/http/index.js'

Vue.config.productionTip = false

//inserindo o axios em uma instancia global do vue
Vue.prototype.$http = http;

new Vue({
  router,
  store: provedor,   //dizendo para o vue que a store será por conta do provedor usando o vuex
  render: h => h(App)
}).$mount('#app')


// PARA RODAR O BACK npm run start-auth