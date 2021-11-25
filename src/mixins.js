//mixin é um código compartilhado

export const logoutMixin = {
    methods: {       
        efetuarLogout(){
                 //   localStorage.removeItem('token'); >VUEX
                 this.$store.commit('DESLOGAR_USUARIO');
                    this.$router.push({ name : 'home'});
        }
    }

}