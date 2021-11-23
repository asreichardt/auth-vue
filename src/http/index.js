
import axios from 'axios';
import provedor from '../provedor';

const http = axios.create({
    baseURL : 'http://localhost:8000/',
    headers : {
        'Accept' : 'aplication/json',
        'Content' : 'aplication/json' }
    }
);

//para salvar o token e utiliza-lo para conceder acesso ou não a requisição

http.interceptors.request.use( function(config){
      //  const token = localStorage.getItem('token');
      //agora usando o vuex>
        const token = provedor.state.token;
        
        if(token) { // se ele existe guarda
            config.headers.Authorization = `Bearer ${token}`;
        } 
        return config;
},function (erro){
    return Promise.reject(erro);
} )
export default http;