<template>
  <section class="row mid-aligner">
    <div class="border">
      <div class="border-image-1"></div>
      <div class="border-image-2"></div>
      <div class="border-image-3"></div>
      <div class="border-image-4"></div>

      <div @mouseover="current = 'facebook'" @mouseout="current = 'none'" :class="{ active: current === 'facebook' }">
        <img src="/img/facebook-pin.png" alt="Facebook Pin" class="pin-facebook">
        <img src="/img/border-facebook.svg" alt="Facebook" class="border-facebook">
      </div>

      <div @mouseover="current = 'google'" @mouseout="current = 'none'" :class="{ active: current === 'google' }">
        <img src="/img/google-pin.png" alt="Google Pin" class="pin-google">
        <img src="/img/border-google.svg" alt="Google" class="border-google">
      </div>

      <div @click="goTo('quiz')" @mouseover="current = 'continue'" @mouseout="current = 'none'"
           :class="{ active: current === 'continue' }">
        <img src="/img/continue-pin.png" alt="Continue Pin" class="pin-continue">
        <img src="/img/border-continue.svg" alt="Continue" class="border-continue">
      </div>

      <div class="border-center mid-aligner">
        <div style="text-align: center;">
          <p>{{ titles.top }}</p>
          <h2>{{ titles.bottom }}</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        current: 'none'
      }
    },
    methods: {
      goTo (location) {
        this.$router.push(location)
      }
    },
    computed: {
      titles () {
        switch (this.current) {
          case 'facebook': return { top: 'login', bottom: 'Facebook' }
          case 'google': return { top: 'login', bottom: 'Google' }
          case 'continue': return { top: 'continuar', bottom: 'Quiz' }
          default: return {}
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .border {
    position: relative;

    &-image-1 {
      position: absolute;
      background-image: url('/img/bg1.svg');
      width: 400px;
      height: 400px;
      top: -210px;
      left: -210px;
      opacity: 0.5;
    }
    &-image-2 {
      position: absolute;
      background-image: url('/img/bg1.svg');
      width: 400px;
      height: 400px;
      top: -210px;
      left: -210px;
      transform: rotate(30deg);
      opacity: 0.5;
    }
    &-image-3 {
      position: absolute;
      background-image: url('/img/bg1.svg');
      width: 350px;
      height: 350px;
      top: -190px;
      left: -190px;
      opacity: 0.5;
    }
    &-image-4 {
      position: absolute;
      background-image: url('/img/bg1.svg');
      width: 350px;
      height: 350px;
      top: -190px;
      left: -190px;
      transform: rotate(30deg);
      opacity: 0.5;
    }

    &-center {
      position: absolute;
      width: 211px;
      height: 211px;
      background-color: white;
      border-radius: 50%;
      font-family: 'Space Mono', monospace;
      top: -115px;
      left: -115px;
    }

    &-facebook {
      position: absolute;
      width: 235px;
      height: 235px;
      top: -150px;
      left: -150px;
      cursor: pointer;
    }

    &-google {
      position: absolute;
      width: 51px;
      height: 192px;
      top: -107px;
      left: 75px;
      cursor: pointer;
    }

    &-continue {
      position: absolute;
      width: 199px;
      height: 53px;
      top: 75px;
      left: -110px;
      cursor: pointer;
    }
  }

  .active {

    & > .pin-facebook {
      opacity: 1;
    }

    & > .pin-google {
      opacity: 1;
    }

    & > .pin-continue {
      opacity: 1;
    }
  }

  .pin {
    &-facebook {
      position: absolute;
      z-index: 10;
      top: -145px;
      left: -180px;
      opacity: 0;
      transition: all 150ms ease;
      cursor: pointer;
    }

    &-google {
      position: absolute;
      z-index: 10;
      top: -30px;
      left: 120px;
      opacity: 0;
      transition: all 150ms ease;
      cursor: pointer;
    }

    &-continue {
      position: absolute;
      z-index: 10;
      top: 120px;
      left: -25px;
      opacity: 0;
      transition: all 150ms ease;
      cursor: pointer;
    }
  }

  section {
    height: calc(100vh - 108px);
    background: url('/img/bg4.svg') no-repeat center;
  }
</style>
