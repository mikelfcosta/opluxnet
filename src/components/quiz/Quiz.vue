<template>
  <div>
    <p>Você está vendo a página de Quiz, que conterá diversos componentes internos</p>
    <router-link :to="{ name: 'QuizResult' }">Finalizar o Quiz</router-link>
    <router-link :to="{ name: 'Home' }">Voltar para a Home</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Quiz',
    data () {
      return {}
    }
  }
</script>

<style lang="scss">

</style>
