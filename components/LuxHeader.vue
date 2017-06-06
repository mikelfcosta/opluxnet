<template>
  <header>
    <img src="/img/lux-logo-white.svg" alt="Lux Logo" v-if="type === 'white'">
    <img src="/img/lux-logo-flat.svg" alt="Lux Logo" v-else>
    <lux-breadcrumbs :paths="breadcrumbs" :type="type"></lux-breadcrumbs>
  </header>
</template>

<script>
  import LuxBreadcrumbs from '~components/LuxBreadcrumbs.vue'
  export default {
    props: ['breadcrumbs', 'type'],
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
