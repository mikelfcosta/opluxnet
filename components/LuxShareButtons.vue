<template>
  <div>
    <div @mouseleave="active = false">
      <div @mouseenter="active = true">
        <lux-hexagon width="105" height="123" :type="active ? 'flat' : 'faded'" shadow="blurred" class="mid-aligner">
          <img src="/img/ico-share.svg" alt="Compartilhar">
        </lux-hexagon>
      </div>
      <div>
        <lux-hexagon width="74" height="87" type="faded" shadow="blurred" class="mid-aligner facebook" v-show="active">
          <lux-indicator-left class="small" style="width: 100px; left: -110px">
            <p style="padding-left: 20px;">Compartilhar</p>
          </lux-indicator-left>
          <img src="/img/ico-facebook.svg" alt="Facebook" height="40">
        </lux-hexagon>
        <lux-hexagon width="74" height="87" type="faded" shadow="blurred" class="mid-aligner google" v-show="active">
          <lux-indicator-bottom class="small">
            <p>Compartilhar</p>
          </lux-indicator-bottom>
          <img src="/img/ico-google.svg" alt="Google" width="40">
        </lux-hexagon>
      </div>
    </div>
  </div>
</template>

<script>
  import LuxHexagon from '~components/LuxHexagon.vue'
  import LuxIndicatorLeft from '~components/LuxIndicatorLeft.vue'
  import LuxIndicatorBottom from '~components/LuxIndicatorBottom.vue'
  export default {
    data () {
      return {
        active: false
      }
    },
    components: {
      LuxHexagon,
      LuxIndicatorLeft,
      LuxIndicatorBottom
    }
  }
</script>

<style lang="scss" scoped>
  .facebook {
    position: relative;
    top: -20px;
    right: -65px;
  }

  .google {
    position: relative;
    top: -37px;
    right: -22px;
  }
</style>
