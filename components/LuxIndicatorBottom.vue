<template>
  <div class="vertical-indicator">
    <span></span>
    <slot></slot>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .vertical-indicator {
    position: absolute;
    right: -80px;
    bottom: -95px;
    height: 125px;
    border-left: 1px solid rgba(255, 255, 255, 0.6);

    & > span {
      position: absolute;
      bottom: -15px;
      left: -8px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      display: block;
      background-color: rgba(255, 255, 255, 0.6);
    }

    & > p {
      padding-left: 30px;
      padding-top: 10px;
      color: white;
      font-family: "Open Sans", sans-serif;
      font-size: 24px;
      margin: 0;
    }
  }
</style>
