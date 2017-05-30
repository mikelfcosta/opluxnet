<template>
  <div class="container" style="height: 100vh;">
    <lux-header :breadcrumbs="['Home', '>', 'Login']"></lux-header>
  </div>
</template>

<script>
  import LuxHeader from '~components/LuxHeader.vue'
  export default {
    components: {
      LuxHeader
    }
  }
</script>

<style>

</style>
