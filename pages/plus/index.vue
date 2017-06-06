<template>
  <div class="container mid-aligner" style="height: 100vh;">
    <lux-header :breadcrumbs="['home', '>', 'plus']" type="white"></lux-header>
    <lux-share-buttons class="top-right"></lux-share-buttons>
    <div class="quiz-map mid-aligner">
      <div class="row row-top">
        <lux-hexagon type="faded-60" shadow="blurred" width="160" height="190">
          <div class="category-button mid-aligner">
            <img src="/img/ico-liberty.svg" class="category-icon" alt="Liberdade">
          </div>
        </lux-hexagon>
        <lux-hexagon type="faded" shadow="blurred" width="160" height="190"
                     state="plus" action="crime">
          <lux-indicator-right style="top: 15px;">
            <p>crime?</p>
          </lux-indicator-right>
          <div class="category-button mid-aligner"
               @mouseenter="icoCrime = true" @mouseleave="icoCrime = false">
            <transition name="fade" mode="out-in">
              <h3 v-if="icoCrime">Crime ou Liberdade</h3>
              <img src="/img/ico-crime.svg" class="category-icon" alt="Crime" v-else>
            </transition>
          </div>
        </lux-hexagon>
      </div>
      <div class="row row-bot">
        <lux-hexagon type="faded" shadow="blurred" width="160" height="190"
                     state="plus" action="invadido">
          <lux-indicator-left style="top: 15px;">
            <p>invadido</p>
          </lux-indicator-left>
          <div class="category-button mid-aligner"
               @mouseenter="icoPwned = true" @mouseleave="icoPwned = false">
            <transition name="fade" mode="out-in">
              <h3 v-if="icoPwned">Fui Invadido?</h3>
              <img src="/img/ico-pwned.svg" class="category-icon" alt="Pwned" v-else>
            </transition>
          </div>
        </lux-hexagon>
        <lux-hexagon class="mid-aligner" type="faded" shadow="blurred" width="160" height="190"
                     state="plus" action="senhas">
          <lux-indicator-right style="bottom: 30px;">
            <p>senhas</p>
          </lux-indicator-right>
          <div class="category-button mid-aligner"
               @mouseenter="icoPassword = true" @mouseleave="icoPassword = false">
            <transition name="fade" mode="out-in">
              <h3 v-if="icoPassword">Força da Senha</h3>
              <img src="/img/ico-password.svg" class="category-icon" alt="Senhas" v-else>
            </transition>
          </div>

        </lux-hexagon>

      </div>
      <div class="row row-bottom">
        <lux-hexagon class="mid-aligner" type="faded" shadow="blurred" width="160" height="190"
                     state="plus" action="premium">
          <lux-indicator-bottom style="left: 150px;">
            <p>premium</p>
          </lux-indicator-bottom>
          <div class="category-button mid-aligner"
               @mouseenter="icoPremium = true" @mouseleave="icoPremium = false">
            <transition name="fade" mode="out-in">
              <h3 v-if="icoPremium">Internet Premium</h3>
              <img src="/img/ico-premium.svg" class="category-icon" alt="Internet Premium" v-else>
            </transition>
          </div>
        </lux-hexagon>
      </div>
    </div>
  </div>
</template>

<script>
  import LuxHexagon from '~components/LuxHexagon.vue'
  import LuxHeader from '~components/LuxHeader.vue'
  import LuxShareButtons from '~components/LuxShareButtons.vue'
  import LuxIndicatorRight from '~components/LuxIndicatorRight.vue'
  import LuxIndicatorLeft from '~components/LuxIndicatorLeft.vue'
  import LuxIndicatorBottom from '~components/LuxIndicatorBottom.vue'
  export default {
    mounted () {
      if (process.BROWSER_BUILD) {
        let element = document.getElementsByTagName('body')[0]
        element.classList.add('black')
      }
    },
    beforeDestroy () {
      if (process.BROWSER_BUILD) {
        let element = document.getElementsByTagName('body')[0]
        element.classList.remove('black')
      }
    },
    data () {
      return {
        icoCrime: false,
        icoPwned: false,
        icoPassword: false,
        icoPremium: false
      }
    },
    components: {
      LuxHeader,
      LuxShareButtons,
      LuxHexagon,
      LuxIndicatorLeft,
      LuxIndicatorRight,
      LuxIndicatorBottom
    }
  }
</script>

<style lang="scss" scoped>
  @import 'assets/css/variables.scss';

  .top-right {
    position: absolute;
    right: 0;
    top: 20px;
    flex-direction: column;
  }

  .category-button {
    width: 160px;
    height: 190px;
    text-align: center;
    cursor: $pointer;

    & > * {
      cursor: $pointer;
    }
  }

  .quiz-map {
    flex-direction: column;
  }

  .row {
    position: relative;

    & > .hexagon {
      margin: 0 7px;
    }

    &-bot {
      top: -30px;
      right: -87px;
    }

    &-bottom {
      top: -60px;
      right: -87px;
    }
  }

  h3 {
    color: white;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 24px;
    margin-top: 10px;
  }

  .category-icon {
    height: 85px;
  }
</style>
