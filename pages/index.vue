<template>
  <div class="container mid-aligner" style="height: 100vh;">
    <div class="row">
      <div class="col">
        <nuxt-link :to="{ name: 'home' }" tag="img" src="/img/logo.png" class="intro-button"></nuxt-link>
        <div class="bg1"></div>
        <div class="bg2"></div>
        <div class="bg3"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .intro-button {
    position: relative;
    cursor: pointer;
    border-radius: 50%;
    z-index: 100;
  }

  .bg1 {
    background-image: url('/img/bg1.svg');
    width: 632px;
    height: 642px;
    position: absolute;
    top: -145px;
    left: -120px;
    right: 0;
    z-index: 10;
  }

  .bg2 {
    background-image: url('/img/bg2.svg');
    width: 632px;
    height: 642px;
    position: absolute;
    top: -145px;
    left: -120px;
    right: 0;
    z-index: 20;
  }

  .bg3 {
    background-image: url('/img/bg3.svg');
    width: 632px;
    height: 642px;
    position: absolute;
    top: -145px;
    left: -120px;
    right: 0;
  }
</style>
