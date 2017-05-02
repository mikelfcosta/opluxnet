<template>
  <div>
    <p>Você está na Home</p>
    <router-link :to="{ name: 'Login' }">Ir para a página de Login</router-link>
    <router-link :to="{ name: 'Quiz' }">Realizar o Quiz</router-link>
    <router-link :to="{ name: 'About' }">Ir para Sobre Nós</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {}
    }
  }
</script>

<style lang="scss">

</style>
