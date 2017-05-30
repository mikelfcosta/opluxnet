<template>
  <div class="container" style="height: 100vh;">
    <lux-header :breadcrumbs="['home', '>', 'login', '>', 'quizz']"></lux-header>
    <div class="quiz-map mid-aligner">
      <div class="row row-top">
        <lux-hexagon class="mid-aligner" style="flex-direction: column;" type="faded-60" shadow="blurred" width="160" height="190">
          <h2>Escolha seu</h2>
          <h1>Quizz!</h1>
        </lux-hexagon>
        <lux-hexagon type="faded" shadow="blurred" width="160" height="190"></lux-hexagon>
      </div>
      <div class="row row-bot">
        <lux-hexagon type="faded" shadow="blurred" width="160" height="190"></lux-hexagon>
        <lux-hexagon type="faded" shadow="blurred" width="160" height="190"></lux-hexagon>
      </div>
    </div>
    <lux-footer></lux-footer>
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
      right: -90px;
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

</style>
