<template>
  <div class="container mid-aligner" style="height: 100vh;">
    <lux-header :breadcrumbs="['home', '>', 'login']"></lux-header>
    <div class="mid-aligner login-container">
      <lux-hexagon width="150" height="176" type="image" shadow="blurred" class="login-hexagon" v-if="avatarImage"
      :style="{ background: `url(${avatarImage}) no-repeat center`, backgroundSize: 'cover' }">
      </lux-hexagon>
      <lux-hexagon width="150" height="176" type="flat" shadow="blurred" class="mid-aligner login-hexagon" v-else>
        <img src="/img/default-avatar.png" alt="Login" class="default-avatar">
      </lux-hexagon>
      <div class="login-options">
        <lux-hexagon width="105" height="123" :type="provider === 'facebook' ? 'flat-blue' : 'flat'" shadow="blurred" class="mid-aligner login-hexagon"
                     action="facebook-login" :state="provider === 'facebook' ? 'home' : false">
         <lux-indicator-left class="indicator-top">
           <p v-if="provider === 'facebook'">logado</p>
           <p v-else>login</p>
         </lux-indicator-left>
          <img src="/img/facebook-logo-white.png" alt="Login Facebook" v-if="provider === 'facebook'">
          <img src="/img/facebook-logo.png" alt="Login Facebook" v-else>
        </lux-hexagon>
        <lux-hexagon width="105" height="123" :type="provider === 'google' ? 'flat-red' : 'flat'" shadow="blurred" class="mid-aligner login-hexagon"
                     action="google-login" :state="provider === 'google' ? 'home' : false">
          <lux-indicator-bottom>
            <p v-if="provider === 'google'">logado</p>
            <p v-else>login</p>
          </lux-indicator-bottom>
          <img src="/img/google-logo-white.png" alt="Login Google" v-if="provider === 'google'">
          <img src="/img/google-logo.png" alt="Login Google" v-else>
        </lux-hexagon>
      </div>
      <lux-hexagon width="61" height="72" type="flat" shadow="blurred" class="mid-aligner login-hexagon" state="home"
      v-if="provider === 'none'">
        <lux-indicator-left class="indicator-bottom">
          <p style="font-size: 22px; line-height: 26px; margin-bottom: 10px;">continuar sem login</p>
        </lux-indicator-left>
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
  import LuxIndicatorLeft from '~components/LuxIndicatorLeft.vue'
  import LuxIndicatorBottom from '~components/LuxIndicatorBottom.vue'
  import axios from 'axios'

  export default {
    data () {
      return {
        provider: 'none',
        avatarImage: ''
      }
    },
    created () {
      axios.get('http://localhost:3000/api/auth/me')
        .then(response => {
          const provider = response.data.provider
          if (provider === 'facebook') {
            this.provider = 'facebook'
            this.avatarImage = `https://graph.facebook.com/${response.data.id}/picture?type=large`
          } else if (provider === 'google') {
            this.provider = 'google'
            this.avatarImage = response.data.photos[0].value.replace('sz=50', 'sz=250')
          }
        })
        .catch(err => console.log(err))
    },
    components: {
      LuxHeader,
      LuxHexagon,
      LuxFooter,
      LuxIndicatorLeft,
      LuxIndicatorBottom
    }
  }
</script>

<style lang="scss" scoped>
  @import 'assets/css/variables.scss';

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
      opacity: 0.8;
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
