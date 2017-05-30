<template>
  <div class="mid-aligner login-container">
    <lux-hexagon width="56" height="66" type="image" shadow="blurred" class="login-hexagon" v-if="avatarImage"
                 :style="{ background: `url(${avatarImage}) no-repeat center`, backgroundSize: 'cover' }">
    </lux-hexagon>
    <lux-hexagon width="56" height="66" type="faded" shadow="blurred" class="mid-aligner login-hexagon" v-else>
      <img src="/img/default-avatar.png" alt="Login" class="default-avatar">
    </lux-hexagon>
    <div class="login-options">
      <lux-hexagon width="39" height="47" :type="provider === 'facebook' ? 'flat-blue' : 'faded'" shadow="blurred"
                   class="mid-aligner login-hexagon"
                   action="facebook-login" :state="provider === 'facebook' ? 'home' : false">
        <lux-indicator-left class="indicator-top small">
          <p v-if="provider === 'facebook'">logado</p>
          <p v-else>login</p>
        </lux-indicator-left>
        <img src="/img/facebook-logo-white.png" class="facebook" alt="Login Facebook" v-if="provider === 'facebook'">
        <img src="/img/facebook-logo.png" class="facebook" alt="Login Facebook" v-else>
      </lux-hexagon>
      <lux-hexagon width="39" height="47" :type="provider === 'google' ? 'flat-red' : 'faded'" shadow="blurred"
                   class="mid-aligner login-hexagon"
                   action="google-login" :state="provider === 'google' ? 'home' : false">
        <lux-indicator-bottom class="small">
          <p v-if="provider === 'google'">logado</p>
          <p v-else>login</p>
        </lux-indicator-bottom>
        <img src="/img/google-logo-white.png" class="google" alt="Login Google" v-if="provider === 'google'">
        <img src="/img/google-logo.png" class="google" alt="Login Google" v-else>
      </lux-hexagon>
    </div>
    <lux-hexagon width="23" height="27" type="faded" shadow="blurred" class="mid-aligner login-hexagon" state="home">
      <img src="/img/logout.png" class="logout" alt="Continuar sem Login">
    </lux-hexagon>
  </div>
</template>

<script>
  import LuxHexagon from '~components/LuxHexagon.vue'
  import LuxIndicatorLeft from '~components/LuxIndicatorLeft.vue'
  import LuxIndicatorBottom from '~components/LuxIndicatorBottom.vue'
  export default {
    components: {
      LuxHexagon,
      LuxIndicatorLeft,
      LuxIndicatorBottom
    }
  }
</script>

<style lang="scss" scoped>
  @import 'assets/css/variables.scss';

  .login-container {
    position: absolute;
    right: 0;
    top: 20px;
    flex-direction: column;
  }

  .default-avatar {
    position: relative;
    left: -2px;
    width: 30px;
  }

  .login-hexagon {
    cursor: $pointer;
    position: relative;

    & > img {
      cursor: $pointer;
      opacity: 0.8;
    }

    .facebook {
      height: 20px;
    }
    .google {
      width: 25px;
    }
    .logout {
      width: 13px;
    }
  }

  .login-options {
    flex-direction: row;
    display: flex;

    & > .hexagon {
      margin: -5px 5px;
    }
  }
</style>
