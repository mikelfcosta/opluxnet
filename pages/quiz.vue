<template>
  <main class="container">
    <lux-orbs></lux-orbs>
    <lux-header :first="{ route: 'home', text: 'Login' }" name="Quiz"></lux-header>
    <section class="row mid-aligner">

    </section>
    <lux-login-area></lux-login-area>
    <lux-info-footer></lux-info-footer>
  </main>
</template>

<script>
  import LuxOrbs from '~/components/LuxOrbs.vue'
  import LuxHeader from '~/components/LuxHeader.vue'
  import LuxLoginArea from '~/components/LuxLoginArea.vue'
  import LuxInfoFooter from '~/components/LuxInfoFooter.vue'

  export default {
    data () {
      return {}
    },
    components: {
      LuxOrbs,
      LuxHeader,
      LuxLoginArea,
      LuxInfoFooter
    }
  }
</script>

<style lang="scss">

</style>
