<template>
  <div class="progress">
    <div class="progress-bar" role="progressbar" :style="{ width: percentage + '%' }"></div>
    <div class="progress-text">{{ percentage }}%</div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({ percentage: 'getCompletionPercentage' })
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
