<template>
  <main class="container">
    <orbs></orbs>
    <header class="row d-flex justify-content-between">
      <span>< Intro</span>
      <span>Login</span>
      <span>Quiz ></span>
    </header>
    <section class="row mid-aligner">
      <div class="border">
        <img src="/static/img/border-facebook.svg" alt="Facebook" class="border-facebook">
        <img src="/static/img/border-google.svg" alt="Google" class="border-google">
        <img src="/static/img/border-continue.svg" alt="Continue" class="border-continue">
      </div>
    </section>
  </main>
</template>

<!--<router-link :to="{ name: 'Login' }">Ir para a página de Login</router-link>-->
<!--<router-link :to="{ name: 'Quiz' }">Realizar o Quiz</router-link>-->
<!--<router-link :to="{ name: 'About' }">Ir para Sobre Nós</router-link>-->
<script>
  import Orbs from '@/components/subcomponents/Orbs.vue'
  export default {
    name: 'Home',
    data () {
      return {}
    },
    components: {
      Orbs
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
      cursor: default;
    }
  }

  .border {
    position: relative;

    &-facebook {
      position: absolute;
      width: 235px;
      height: 235px;
      top: -150px;
      left: -150px;
      cursor: pointer;
    }

    &-google {
      position: absolute;
      width: 51px;
      height: 192px;
      top: -107px;
      left: 75px;
      cursor: pointer;
    }

    &-continue {
      position: absolute;
      width: 199px;
      height: 53px;
      top: 75px;
      left: -110px;
      cursor: pointer;
    }
  }

  section {
    height: calc(100vh - 108px);
    background: url('/static/img/bg4.svg') no-repeat center;
  }
</style>
