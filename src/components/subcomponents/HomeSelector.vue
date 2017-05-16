<template>
  <div class="border">
    <div @mouseover="current = 'facebook'" @mouseout="current = 'none'" :class="{ active: current === 'facebook' }">
      <img src="/static/img/facebook-pin.png" alt="Facebook Pin" class="pin-facebook">
      <img src="/static/img/border-facebook.svg" alt="Facebook" class="border-facebook">
    </div>

    <div @mouseover="current = 'google'" @mouseout="current = 'none'" :class="{ active: current === 'google' }">
      <img src="/static/img/google-pin.png" alt="Google Pin" class="pin-google">
      <img src="/static/img/border-google.svg" alt="Google" class="border-google">
    </div>

    <div @mouseover="current = 'continue'" @mouseout="current = 'none'" :class="{ active: current === 'continue' }">
      <img src="/static/img/continue-pin.png" alt="Continue Pin" class="pin-continue">
      <img src="/static/img/border-continue.svg" alt="Continue" class="border-continue">
    </div>

    <div class="border-center mid-aligner">
      <div style="text-align: center;">
        <p>{{ titles.top }}</p>
        <h2>{{ titles.bottom }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        current: 'none'
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
</style>
