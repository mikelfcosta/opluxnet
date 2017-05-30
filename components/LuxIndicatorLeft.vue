<template>
  <div class="horizontal-indicator">
    <span></span>
    <slot></slot>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .horizontal-indicator {
    position: absolute;
    left: -140px;
    width: 130px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.6);

    &.indicator-top {
      top: -10px;
    }

    &.indicator-bottom {
      top: 10px;
      width: 170px;
      left: -180px;
    }

    & > span {
      position: absolute;
      bottom: -8px;
      left: -15px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      display: block;
      background-color: rgba(255, 255, 255, 0.6);
    }

    & > p {
      padding-left: 30px;
      color: white;
      font-family: "Open Sans", sans-serif;
      font-size: 24px;
      margin: 0;
    }
  }
</style>
