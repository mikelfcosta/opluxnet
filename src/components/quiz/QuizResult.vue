<template>
  <div>
    <p>Você está vendo a página de resultado do seu Quiz!</p>
    <router-link :to="{ name: 'HomePlus' }">Mas espere, tem mais!</router-link>
  </div>
</template>

<script>
  export default {
    name: 'QuizResult',
    data () {
      return {}
    }
  }
</script>

<style lang="scss">

</style>
