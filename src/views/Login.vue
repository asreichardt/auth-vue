    
<template>
    <div class="container">
        <h1>Login</h1>
        <form @submit.prevent="efetuarLogin">
               <div class="form.group">
                <label for="email">E-mail</label>
                <input type="email" class="form-control" v-model="usuario.email">
            </div>
            <div class="form.group">
                <label for="senha">Senha</label>
                <input type="password" class="form-control" v-model="usuario.senha">
            </div>
            <br>
            <button class="btn btn-primary" type="submit">Login</button>

            <router-link :to="{name:'novo.usuario'}"> Não tem cadastro? Cadastre-se aqui!</router-link>
        </form>
    </div>
</template> 

<script>
//import axios from 'axios'

export default ({
    
    data: () => {
     
     return {
        usuario: {
        email: "",
        senha: ""
        }
     }
  },
   methods : {

       efetuarLogin(){
                //chamando o axios pelo vue prototype
                this.$http.post("auth/login", this.usuario)
                .then (resposta => {

                    console.log(resposta);
                    //para salver o token na local storage (que está no response (ver no console))

                    localStorage.setItem("token", resposta.data.access_token);
                  //  localStorage.setItem('token', resposta.data.acess_token);
                    this.$router.push( {name: 'gerentes'});
                })
                .catch (erro => console.log(erro));
       }

   }

})
</script>
