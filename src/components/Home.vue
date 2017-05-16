<template>
  <main class="container">
    <orbs></orbs>
    <header class="row d-flex justify-content-between">
      <router-link :to="{ name: 'Landing Page' }" tag="span">< Intro</router-link>
      <span>Login</span>
      <span>Quiz ></span>
    </header>
    <section class="row mid-aligner">
      <home-selector></home-selector>
    </section>
  </main>
</template>

<!--<router-link :to="{ name: 'Login' }">Ir para a página de Login</router-link>-->
<!--<router-link :to="{ name: 'Quiz' }">Realizar o Quiz</router-link>-->
<!--<router-link :to="{ name: 'About' }">Ir para Sobre Nós</router-link>-->
<script>
  import Orbs from '@/components/subcomponents/Orbs.vue'
  import HomeSelector from '@/components/subcomponents/HomeSelector.vue'
  export default {
    name: 'Home',
    data () {
      return {}
    },
    components: {
      Orbs,
      HomeSelector
    }
  }
</script>

<style lang="scss" scoped>
  header {
    background-color: black;
    color: white;
    font-family: 'Space Mono', monospace;
    font-size: 24px;
    min-height: 30px;
    padding: 10px 20px;

    & > span {
      cursor: pointer;
    }
  }

  section {
    height: calc(100vh - 108px);
    background: url('/static/img/bg4.svg') no-repeat center;
  }
</style>
