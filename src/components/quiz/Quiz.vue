<template>
  <main class="container">
    <orbs></orbs>
    <view-header :first="{ route: 'Home', text: 'Login' }" name="Quiz"></view-header>
    <section class="row mid-aligner">

    </section>
    <info-footer></info-footer>
  </main>
</template>

<script>
  import Orbs from '@/components/subcomponents/Orbs.vue'
  import ViewHeader from '@/components/subcomponents/ViewHeader.vue'
  import InfoFooter from '@/components/subcomponents/InfoFooter.vue'
  export default {
    name: 'Quiz',
    data () {
      return {}
    },
    components: {
      Orbs,
      ViewHeader,
      InfoFooter
    }
  }
</script>

<style lang="scss">

</style>
