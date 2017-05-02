<template>
  <div>
    <p>Você está na página de Login</p>
    <a href="">Logar com Facebook</a>
    <a href="">Logar com Google</a>
    <router-link :to="{ name: 'Home' }">Voltar para Home</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {}
    }
  }
</script>

<style lang="scss">

</style>
