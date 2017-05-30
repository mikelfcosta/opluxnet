<template>
  <div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 25%"></div>
    <div class="progress-text">25%</div>
  </div>
</template>

<script>
  export default {}
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
