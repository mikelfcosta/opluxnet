<template>
  <div>
    <p>Você está na página Sobre nós!</p>
    <router-link :to="{ name: 'Home' }">Voltar a Home</router-link>
    <a href="https://www.github.com/mikelfcosta/opluxnet">Ir para o Github</a>
    <a href="http://www.nan.art.br">Ir para o site da NaN</a>
  </div>
</template>

<script>
  export default {
    name: 'About',
    data () {
      return {}
    }
  }
</script>

<style lang="scss">

</style>
