<template>
  <div class="container mid-aligner" style="height: 100vh">
    <lux-header :breadcrumbs="['home', '>', 'login', '>', 'quizz', '>', this.$route.params.category]"></lux-header>
    <lux-login></lux-login>
    <div class="mid-aligner category">
      <lux-hexagon class="mid-aligner" width="260" height="305" type="image" shadow="blurred"
                   :style="{ background: `url(/img/${image}) no-repeat center` }">
      </lux-hexagon>
      <div class="subcategory">
        <lux-hexagon v-for="quiz in category.quizzes" key="quiz.id" class="subcategory-hexagon"
                     :type="quiz.done ? 'flat' : 'faded'" shadow="blurred" width="109" height="125" state="quiz"
                     :action="[category.name, quiz.link]">
          <lux-indicator-right style="top: 25px;">
            <p>{{ quiz.id }}</p>
          </lux-indicator-right>
          <h1 class="hexagon-icon mid-aligner" @mouseover="select(quiz)" @mouseout="unselect()"
          :style="{ color: quiz.done ? 'rgba(0,0,0,0.75)' : 'white' }">
            {{ quiz.abv }}
          </h1>
        </lux-hexagon>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <div class="description" v-if="description.name">
        <h2>{{ description.name }}</h2>
        <p>{{ description.description }}</p>
      </div>
    </transition>
    <lux-help></lux-help>
    <lux-footer></lux-footer>
  </div>
</template>

<script>
  import LuxHexagon from '~components/LuxHexagon.vue'
  import LuxHeader from '~components/LuxHeader.vue'
  import LuxFooter from '~components/LuxFooter.vue'
  import LuxIndicatorRight from '~components/LuxIndicatorRight.vue'
  import LuxLogin from '~components/LuxLogin.vue'
  import LuxHelp from '~components/LuxHelp.vue'
  export default {
    validate ({ params }) {
      if (params.category === 'nomes' || params.category === 'datas' || params.category === 'personalidades') {
        return true
      }
    },
    data () {
      return {
        description: {}
      }
    },
    computed: {
      category () {
        return this.$store.state.quiz.filter(c => c.name === this.$route.params.category)[0]
      },
      image () {
        if (this.description.image) return '/quiz/' + this.description.image
        else return this.category.icon + '-cut.png'
      }
    },
    methods: {
      select (quiz) {
        this.description = quiz
      },
      unselect () {
        this.description = {}
      }
    },
    components: {
      LuxHeader,
      LuxHexagon,
      LuxFooter,
      LuxLogin,
      LuxHelp,
      LuxIndicatorRight
    }
  }
</script>

<style lang="scss" scoped>
  .category {
    position: relative;
    left: -250px;
  }

  .subcategory {
    padding-left: 30px;
  }

  .subcategory-hexagon {
    position: relative;
    margin-bottom: -25px;

    &:nth-of-type(2n) {
      right: -70px;
    }
  }

  .hexagon-icon {
    width: 109px;
    height: 125px;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
  }

  .description {
    position: absolute;
    right: 0;
    border-left: 1px solid white;
    color: white;
    width: 200px;
    height: 400px;
    padding: 20px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s ease;
  }

  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
</style>
