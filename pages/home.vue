<template>
  <main class="container">
    <lux-orbs></lux-orbs>
    <lux-header :first="{ route: 'index', text: 'Intro' }" name="Login"
                 :last="{ route: 'quiz', text: 'Quiz' }"></lux-header>
    <section class="row mid-aligner">
      <lux-home-selector></lux-home-selector>
    </section>
    <aside>
      <p>Fazer login aumenta a <span style="color: #A36B49;">precisão</span> do seu resultado!</p>
    </aside>
    <lux-info-footer></lux-info-footer>
  </main>
</template>

<script>
  import LuxOrbs from '~/components/LuxOrbs.vue'
  import LuxHeader from '~/components/LuxHeader.vue'
  import LuxHomeSelector from '~/components/LuxHomeSelector.vue'
  import LuxInfoFooter from '~/components/LuxInfoFooter.vue'

  export default {
    data () {
      return {}
    },
    components: {
      LuxOrbs,
      LuxHeader,
      LuxHomeSelector,
      LuxInfoFooter
    }
  }

</script>

<style>

</style>
