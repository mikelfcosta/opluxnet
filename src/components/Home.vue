<template>
  <main class="container">
    <orbs></orbs>
    <header class="row d-flex justify-content-between">
      <router-link :to="{ name: 'Landing Page' }" tag="span">< Intro</router-link>
      <span>Login</span>
      <router-link :to="{ name: 'Quiz' }" tag="span">Quiz ></router-link>
    </header>
    <section class="row mid-aligner">
      <home-selector></home-selector>
    </section>
    <aside>
      <p>Fazer login aumenta a <span style="color: #A36B49;">precisão</span> do seu resultado!</p>
    </aside>
    <footer>
      <p><img src="/static/img/icon-navigate.png" alt="Navigate">Navegar entre Telas</p>
      <p><img src="/static/img/icon-middlemouse.png" alt="Category">Navegar entre Categorias</p>
      <p><img src="/static/img/icon-leftclick.png" alt="Select">Selecionar</p>
      <p>
        <img src="/static/img/icon-aboutus.png" alt="About">
        <span>#opLUXXnet</span>
        <span>Equipe NaN</span>
      </p>
    </footer>
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
  main {
    position: relative;
  }

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
    background-size: 65%;
  }

  aside {
    border-right: 5px solid black;
    font-family: 'Space Mono', monospace;
    font-size: 28px;
    padding: 50px 30px 50px 0;
    position: absolute;
    right: 0;
    text-align: right;
    top: 35%;
    width: 200px;
  }

  footer {
    position: absolute;
    left: 0;
    bottom: 0;

    p {
      font-family: 'Space Mono', monospace;
      font-weight: 500;

      & > img {
        padding-right: 10px;
      }
      & > span {
        padding: 0 10px;
        margin-left: 10px;
        border-bottom: 1px solid black;
        text-align: center;
      }
    }
  }
</style>
