<template>
  <div class="container result mid-aligner">
    <div class="result-header mid-aligner">
      <span>xxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
      <p>bem-vindo</p><span>xxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
    </div>
    <div class="result-left-infos">
      <p>&lt;#opluxxnet-project&gt;</p>
      <p>&lt;#version-1.0&gt;</p>
      <p>&lt;#loading modules...&gt;</p>
      <p>&lt;#loading description...&gt;</p>
      <div class="loading-connectors">
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
      </div>
      <p class="user-info" v-for="info in userinfo">{{ info }}</p>
    </div>
    <div class="result-main">
      <lux-hexagon class="map-hexagon mid-aligner" style="flex-direction: column;" type="image" shadow="blurred" width="404"
                   height="445"
                   :style="{ background: `url(${image}) no-repeat center` }">
      </lux-hexagon>
      <lux-hexagon width="200" height="230" type="image" shadow="blurred" class="login-hexagon" v-if="user.avatarImage"
                   :style="{ background: `url(${user.avatarImage}) no-repeat center` }">
      </lux-hexagon>
    </div>
    <div class="result-right-infos">
      <div class="danger-info">
        <img src="/img/ico-danger.svg" alt="Danger">
        <h3>Fique calmo! <br> Você não foi <br>hackeado (ainda)</h3>
      </div>
      <p>
        A opluxxnet é um projeto que procura expor informações privilegiadas aos usuários com base em perguntas simples, estimulando reflexões e discussões referentes aos direitos de privacidade e neutralidade da internet no Brasil.</p>
      <button>Entenda mais aqui</button>
    </div>
  </div>
</template>

<script>
  import LuxHexagon from '~components/LuxHexagon.vue'
  import { mapGetters } from 'vuex'
  export default {
    name: 'Result',
    data () {
      return {
        image: ''
      }
    },
    created () {
      this.$store.dispatch('login')
    },
    mounted () {
      if (process.BROWSER_BUILD) {
        let element = document.getElementsByTagName('body')[0]
        element.classList.add('black')
        return navigator.geolocation.getCurrentPosition(position => {
          this.image = `https://maps.googleapis.com/maps/api/staticmap?center=${position.coords.latitude},${position.coords.longitude}&size=200x600&scale=2&zoom=16&key=AIzaSyDwhlhie8kVA6_SsYJx8DgiqJ_F8ArYeFw`
        })
      }
    },
    computed: {
      ...mapGetters({ user: 'getUser', userinfo: 'getFullResult' })
    },
    components: {
      LuxHexagon
    }
  }
</script>

<style lang="scss">
  .result {
    font-family: Pexico, sans-serif;
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    &-header {
      color: #00FF00;
      font-size: 25px;
      position: absolute;
      top: 20px;

      & > p {
        min-width: 300px;
        text-align: center;
        position: relative;
        top: 8px;
      }

      & > span {
        font-family: "Space Mono", sans-serif;
      }
    }

    &-left-infos {
      position: absolute;
      top: 150px;
      left: 0;
      color: white;
      width: 300px;

      p {
        margin: 0;
      }

      .loading-connectors {
        margin: 40px 20px;
        font-size: 18px;
      }

      .user-info {
        &:before {
          content: '> '
        }
      }
    }

    .result-main {
      position: relative;
      top: -50px;
      left: -50px;

      .map-hexagon {
        opacity: 1;
      }

      .login-hexagon {
        position: absolute;
        top: -120px;
        right: -50px;
        z-index: 5;
        opacity: 0.9;
      }
    }

    &-right-infos {
      position: absolute;
      top: 150px;
      right: 0;
      width: 300px;

      .danger-info {
        text-align: center;
      }

      h3 {
        color: white;
        margin-top: 20px;
      }

      p {
        margin-top: 50px;
        color: white;
        text-align: right;
      }

      button {
        margin-top: 50px;
        background-color: #BDBDBD;
        width: 300px;
        height: 75px;
        font-family: Pexico, "Open Sans", Arial, sans-serif;
      }
    }
  }
</style>
