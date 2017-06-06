<template>
  <div>
    <social-sharing inline-template>
      <div class="share-buttons">
        <p><b>Compartilhar</b></p>
        <network network="facebook">
          <i class="fa fa-facebook"></i> Facebook
        </network>
        <network network="twitter">
          <i class="fa fa-twitter"></i> Twitter
        </network>
        <network network="googleplus">
          <i class="fa fa-google-plus"></i> Google +
        </network>
        <network network="reddit">
          <i class="fa fa-reddit"></i> Reddit
        </network>
        <network network="whatsapp">
          <i class="fa fa-whatsapp"></i> Whatsapp
        </network>
      </div>
    </social-sharing>
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
  p {
    color: white;
    text-align: right;
    margin: 0;
  }
  .share-buttons {
    color: rgba(255,255,255,0.9);
    display: flex;
    justify-content: space-between;
    width: 600px;
  }
</style>
