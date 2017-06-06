<template>
  <div class="container mid-aligner" style="height: 100vh;">
    <lux-header :breadcrumbs="['home', '>', 'login', '>', 'quizz']"></lux-header>
    <lux-login></lux-login>
    <div class="quiz-map mid-aligner">
      <div class="row row-top">
        <lux-hexagon class="mid-aligner" style="flex-direction: column;" type="faded-60" shadow="blurred" width="160" height="190">
          <h2>Escolha seu</h2>
          <h1>Quizz!</h1>
        </lux-hexagon>
        <lux-hexagon type="faded" shadow="blurred" width="160" height="190"
                     state="category" action="nomes">
          <lux-indicator-right style="top: 15px;">
            <p>nomes</p>
          </lux-indicator-right>
          <div class="category-button mid-aligner"
               @mouseenter="icoNames = true" @mouseleave="icoNames = false">
            <transition name="fade" mode="out-in">
              <h3 v-if="icoNames">Nomes</h3>
              <img src="img/ico-names.svg" class="category-icon" alt="Nomes" v-else>
            </transition>
          </div>
        </lux-hexagon>
      </div>
      <div class="row row-bot">
        <lux-hexagon class="mid-aligner" type="faded" shadow="blurred" width="160" height="190"
                     state="category" action="datas">
          <lux-indicator-left style="bottom: 10px;">
            <p>datas</p>
          </lux-indicator-left>
          <div class="category-button mid-aligner"
               @mouseenter="icoDates = true" @mouseleave="icoDates = false">
            <transition name="fade" mode="out-in">
              <h3 v-if="icoDates">Datas</h3>
              <img src="img/ico-dates.svg" class="category-icon" alt="Datas" v-else>
            </transition>
          </div>

        </lux-hexagon>
        <lux-hexagon class="mid-aligner" type="faded" shadow="blurred" width="160" height="190"
                     state="category" action="personalidades">
          <lux-indicator-bottom style="left: 150px;">
            <p>pessoal</p>
          </lux-indicator-bottom>
          <div class="category-button mid-aligner"
               @mouseenter="icoPersonality = true" @mouseleave="icoPersonality = false">
            <transition name="fade" mode="out-in">
              <h3 v-if="icoPersonality">Pessoal</h3>
              <img src="img/ico-personality.svg" class="category-icon" alt="Personalidade" v-else>
            </transition>
          </div>

        </lux-hexagon>
      </div>
    </div>
    <lux-footer></lux-footer>
    <lux-help></lux-help>
  </div>
</template>

<script>
  import LuxHeader from '~components/LuxHeader.vue'
  import LuxHexagon from '~components/LuxHexagon.vue'
  import LuxFooter from '~components/LuxFooter.vue'
  import LuxIndicatorRight from '~components/LuxIndicatorRight.vue'
  import LuxIndicatorLeft from '~components/LuxIndicatorLeft.vue'
  import LuxIndicatorBottom from '~components/LuxIndicatorBottom.vue'
  import LuxLogin from '~components/LuxLogin.vue'
  import LuxHelp from '~components/LuxHelp.vue'
  export default {
    data () {
      return {
        icoNames: false,
        icoDates: false,
        icoPersonality: false
      }
    },
    components: {
      LuxHeader,
      LuxLogin,
      LuxHexagon,
      LuxFooter,
      LuxHelp,
      LuxIndicatorLeft,
      LuxIndicatorRight,
      LuxIndicatorBottom
    }
  }
</script>

<style lang="scss" scoped>
  @import 'assets/css/variables.scss';

  .category-button {
    width: 160px;
    height: 190px;
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
  }

  .hexagon {
    & > h1 {
      color: #575756;
      font-family: "Open Sans", sans-serif;
      font-weight: bold;
      font-size: 36px;
      text-transform: uppercase;
      margin: 0;
    }

    & > h2 {
      color: #575756;
      font-family: "Open Sans", sans-serif;
      font-weight: bold;
      font-size: 18px;
      text-transform: uppercase;
      margin: 0;
    }
  }

  .category-icon {
    height: 85px;
  }

  h3 {
    color: white;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 28px;
    margin-top: 10px;
  }

  .cursor {
    cursor: $pointer;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .1s ease;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
</style>
