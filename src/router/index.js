import Vue from 'vue'
import VueRouter from 'vue-router'
import Gerentes from '../views/Gerentes.vue'
import Home from '../views/Home.vue'
//import NovoUsuario from '../views/NovoUsuario.vue' CHAMANDO DINAMICAMENTE
import Login from '../views/Login'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    component: Gerentes
  },
  {
    path: '/cadastre-se',
    name: 'novo.usuario',
    component: ()=>import('../views/NovoUsuario.vue'),  //REALIZANDO O IMPORT DINAMICO AO INVES DE TUDO DE UMA VEZ LA EM CIMA
    meta: {                      //usando o vue router para mostrar ou nao as rotas
      publica : true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      publica: true
    }
  }

]

const router = new VueRouter({
  routes
})

//desse modo o router antes de renderizar vai verificar se a rota e publica ou não
router.beforeEach((routeTo, routeFrom, next)=>{
    if(!routeTo.meta.publica && !store.state.token){
      return next({path: '/login'});
    }
    next();
})

export default router
