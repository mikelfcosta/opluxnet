<template>
  <div class="progress-container">
    <div class="progress">
      <div class="progress-bar" role="progressbar" :style="{ width: (current/total)*100 + '%'}"></div>
      <div class="progress-text">
        {{ current }}/{{ total }}
      </div>
    </div>
    <lux-orbs v-if="!hideOrbs"></lux-orbs>
  </div>
</template>

<script>
  import LuxOrbs from '~components/LuxOrbs.vue'
  export default {
    props: ['current', 'total', 'hideOrbs'],
    components: {
      LuxOrbs
    }
  }
</script>

<style lang="scss" scoped>
  .progress {
    width: 600px;
    height: 20px;
    position: relative;
    overflow: visible;
    background-color: rgba(255,255,255,0.5);

    &-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: absolute;
      left: 0;
      bottom: 40px;
    }

    &-bar {
      background-color: white;
      height: 100%;
    }

    &-text {
      position: absolute;
      right: -75px;
      color: white;
      font-family: "Open Sans", sans-serif;
      font-size: 24px;
    }
  }
</style>
