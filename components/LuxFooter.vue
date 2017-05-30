<template>
  <div class="footer">
    <lux-main-progress></lux-main-progress>
    <lux-orbs></lux-orbs>
  </div>
</template>

<script>
  import LuxMainProgress from '~components/LuxMainProgress.vue'
  import LuxOrbs from '~components/LuxOrbs.vue'
  export default {
    components: {
      LuxMainProgress,
      LuxOrbs
    }
  }
</script>

<style lang="scss" scoped>
  .footer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    left: 0;
    bottom: 80px;
  }
</style>
