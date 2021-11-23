<template>
  <div id="app">
            <barra-navegacao />

        <router-view/>
  </div>
</template>

<style>
.navbar {
  background: #27ae60;
}
.navbar-bytebank a {
  color: #fff;
}
.navbar-bytebank a:hover {
  color: #000;
}
</style>
<script>
import BarraNavegacao from '../src/components/BarraNavegacao.vue';

export default {
  components: { BarraNavegacao },
    
}
</script>