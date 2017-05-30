<template>
  <header>
    <img src="/img/lux-logo-flat.svg" alt="Lux Logo">
    <lux-breadcrumbs :paths="breadcrumbs"></lux-breadcrumbs>
  </header>
</template>

<script>
  import LuxBreadcrumbs from '~components/LuxBreadcrumbs.vue'
  export default {
    props: ['breadcrumbs'],
    components: {
      LuxBreadcrumbs
    }
  }
</script>

<style lang="scss" scoped>
  header {
    position: absolute;
    top: 20px;
    left: 20px;

    img {
      width: 88px;
    }
  }
</style>
