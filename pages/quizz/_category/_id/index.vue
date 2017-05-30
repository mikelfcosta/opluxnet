<template>
  <div class="container mid-aligner" style="height: 100vh">
    <lux-header :breadcrumbs="['home', '>', 'login', '>', 'quizz', '>', this.$route.params.category, '>', this.quiz.link]">
    </lux-header>
    <div class="quiz mid-aligner">
      <!--<lux-hexagon width="394" height="462" type="flat" shadow="blurred"></lux-hexagon>-->
      <div class="question open-sans">
        <h1>{{ current.question }}</h1>
        <div class="answers">
          <lux-hexagon width="58" height="67" type="flat" shadow="blurred" class="mid-aligner hexagon-choice"
                       v-for="(answer, index) in current.answers" key="index">
            <lux-indicator-right class="hexagon-question open-sans">
              <p class="margin-10">{{ answer }}</p>
            </lux-indicator-right>
            {{ String.fromCharCode(65 + index) }}
          </lux-hexagon>
        </div>
      </div>
    </div>
    <lux-quiz-progress :percentage="percentage"></lux-quiz-progress>
  </div>
</template>

<script>
  import LuxHexagon from '~components/LuxHexagon.vue'
  import LuxHeader from '~components/LuxHeader.vue'
  import LuxIndicatorRight from '~components/LuxIndicatorRight.vue'
  import LuxQuizProgress from '~components/LuxQuizProgress.vue'
  export default {
    components: {
      LuxHexagon,
      LuxHeader,
      LuxIndicatorRight,
      LuxQuizProgress
    },
    data () {
      return {
        currentIndex: 0,
        history: []
      }
    },
    computed: {
      category () {
        return this.$store.state.quiz.filter(c => c.name === this.$route.params.category)[0]
      },
      quiz () {
        return this.category.quizzes.filter(q => q.link === this.$route.params.id)[0]
      },
      current () {
        return this.quiz.questions[this.currentIndex]
      },
      percentage () {
        return this.currentIndex / this.quiz.questions.length
      }
    }
  }
</script>

<style lang="scss" scoped>
  .quiz {
    position: relative;
  }

  .question {
    /*padding-left: 40px;*/

    & > h1 {
      font-family: "Open Sans", sans-serif;
      font-weight: bold;
      font-style: italic;
      font-size: 24px;
      margin-bottom: 20px;
      color: white;
      text-transform: uppercase;
    }
  }

  .hexagon-choice {
    position: relative;
    margin-bottom: -10px;
    &:nth-of-type(2n) {
      right: -30px;
    }
  }
</style>
