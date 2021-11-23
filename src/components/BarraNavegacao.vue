<template>
    <nav class="navbar navbar-expand-lg navbar-bytebank">
      <a class="navbar-brand" href="#">ByteBank</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
         
          <logado  v-if="usuarioEstaLogado"/>
          <deslogado v-else/>
          
      </div>
    </nav>

</template>

<script>
import Logado from '../components/Logado.vue'
import Deslogado from '../components/Deslogado.vue'

export default {
  components: { Logado, Deslogado },  
  computed : {
        usuarioEstaLogado(){
          //          return Boolean (localStorage.getItem('token')) ; agora com vuex >
          return Boolean(this.$store.state.token);
        }
  }
}
</script>