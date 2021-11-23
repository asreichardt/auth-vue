import Vuex from 'vuex';
import Vue from 'vue';
import http from '../src/http/index'

Vue.use(Vuex);

//monitora o estado do token e do usuario

const estado =  {
    token: null, 
    usuario:{}
}

//padrao do vuex para realizar alterações no stado em caixa alta, ja as actions sao em camel case
const mutations = { 
                            //permite dois parametros o state e os dados
    DEFINIR_USUARIO_LOGADO(state, {token, usuario}){
            state.token = token
            state.usuario = usuario
    },
    DESLOGAR_USUARIO(state){
        state.token = null; 
        state.usuario = {};
    }
}

const actions = {   //atribuição via desestruturação
    efetuarLogin( {commit}, usuario){

        return new Promise( (resolve, reject)=>{
                http.post('auth/login',usuario)
                    .then( response=>{
                        commit('DEFINIR_USUARIO_LOGADO',{
                            token: response.data.access_token,
                            usuario: response.data.user
                        })
                       resolve(response.data)
                    })
                    .catch( err =>{
                        console.log(err);
                        reject(err);
                    })
        })
    }    
}


export default new Vuex.Store({ 
     state : estado, 
     mutations : mutations,  //poderia ser tb apenas  "mutations"
     actions: actions
})