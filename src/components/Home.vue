<template>
  <main class="container">
    <orbs></orbs>
    <view-header :first="{ route: 'Landing Page', text: 'Intro' }" name="Login"
                 :last="{ route: 'Quiz', text: 'Quiz' }"></view-header>
    <section class="row mid-aligner">
      <home-selector></home-selector>
    </section>
    <aside>
      <p>Fazer login aumenta a <span style="color: #A36B49;">precisão</span> do seu resultado!</p>
    </aside>
    <info-footer></info-footer>
  </main>
</template>

<script>
  import Orbs from '@/components/subcomponents/Orbs.vue'
  import ViewHeader from '@/components/subcomponents/ViewHeader.vue'
  import HomeSelector from '@/components/subcomponents/HomeSelector.vue'
  import InfoFooter from '@/components/subcomponents/InfoFooter.vue'
  export default {
    name: 'Home',
    data () {
      return {}
    },
    components: {
      Orbs,
      HomeSelector,
      InfoFooter,
      ViewHeader
    }
  }
</script>

<style lang="scss">
  main {
    position: relative;
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
</style>
