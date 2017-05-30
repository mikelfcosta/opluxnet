<template>
  <div class="container" style="height: 100vh;">
    <lux-header :breadcrumbs="['home', '>', 'login']"></lux-header>
    <div class="mid-aligner login-container">
      <lux-hexagon width="150" height="176" type="flat" shadow="blurred" class="mid-aligner login-hexagon">
        <img src="/img/default-avatar.png" alt="Login" class="default-avatar">
      </lux-hexagon>
      <div class="login-options">
        <lux-hexagon width="105" height="123" type="flat" shadow="blurred" class="mid-aligner login-hexagon">
          <div class="horizontal-indicator facebook">
            <span></span><p>login</p>
          </div>
          <img src="/img/facebook-logo.png" alt="Login Facebook">
        </lux-hexagon>
        <lux-hexagon width="105" height="123" type="flat" shadow="blurred" class="mid-aligner login-hexagon">
          <div class="vertical-indicator">
            <span></span><p>login</p>
          </div>
          <img src="/img/google-logo.png" alt="Login Google">
        </lux-hexagon>
      </div>
      <lux-hexagon width="61" height="72" type="flat" shadow="blurred" class="mid-aligner login-hexagon" state="home">
        <div class="horizontal-indicator continue">
          <span></span><p>continuar sem login</p>
        </div>
        <img src="/img/logout.png" alt="Continuar sem Login">
      </lux-hexagon>
      <lux-footer></lux-footer>
    </div>

  </div>
</template>

<script>
  import LuxHeader from '~components/LuxHeader.vue'
  import LuxHexagon from '~components/LuxHexagon.vue'
  import LuxFooter from '~components/LuxFooter.vue'

  export default {
    components: {
      LuxHeader,
      LuxHexagon,
      LuxFooter
    }
  }
</script>

<style lang="scss" scoped>
  @import 'assets/css/variables.scss';

  .vertical-indicator {
    position: absolute;
    right: -80px;
    bottom: -135px;
    height: 150px;
    border-left: 1px solid rgba(255,255,255,0.6);

    & > span {
      position: absolute;
      bottom: -15px;
      left: -8px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      display: block;
      background-color: rgba(255,255,255,0.6);
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

  .horizontal-indicator {
    position: absolute;
    left: -140px;
    width: 130px;
    border-bottom: 1px solid rgba(255,255,255,0.6);

    &.facebook {
      top: -10px;
    }

    &.continue {
      top: 10px;
      width: 170px;
      left: -180px;

      & > p {
        font-size: 22px;
        line-height: 26px;
        margin-bottom: 10px;
      }
    }

    & > span {
      position: absolute;
      bottom: -8px;
      left: -15px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      display: block;
      background-color: rgba(255,255,255,0.6);
    }

    & > p {
      padding-left: 30px;
      color: white;
      font-family: "Open Sans", sans-serif;
      font-size: 24px;
      margin: 0;
    }
  }

  .login-container {
    flex-direction: column;
  }

  .default-avatar {
    position: relative;
    left: -3px;
  }

  .login-hexagon {
    cursor: $pointer;
    position: relative;

    & > img {
      cursor: $pointer;
    }

    & > img {
      opacity: 0.6;
    }
  }

  .login-options {
    flex-direction: row;
    display: flex;

    & > .hexagon {
      margin: 0 10px;
    }
  }
</style>
