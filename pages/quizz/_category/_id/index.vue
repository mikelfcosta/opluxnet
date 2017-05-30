<template>
  <div class="container mid-aligner" style="height: 100vh">
    <lux-header :breadcrumbs="['home', '>', 'login', '>', 'quizz', '>', this.$route.params.category, '>', this.quiz.link]">
    </lux-header>
    <div class="quiz" v-if="!end">
      <!--<lux-hexagon width="394" height="462" type="flat" shadow="blurred"></lux-hexagon>-->
      <div class="question open-sans">
        <h1>{{ current.question }}</h1>
        <div class="answers">
          <lux-hexagon width="58" height="67" type="flat" shadow="blurred" class="mid-aligner hexagon-choice"
                       v-for="(answer, index) in current.answers" key="index">
            <lux-indicator-right class="hexagon-question open-sans">
              <p class="margin-10">{{ answer }}</p>
            </lux-indicator-right>
            <h1 class="hexagon-icon mid-aligner" @click="next(index)">
              {{ String.fromCharCode(65 + index) }}
            </h1>
          </lux-hexagon>
        </div>
      </div>
    </div>
    <div class="result" v-else>
      <lux-hexagon width="395" height="463" type="flat" shadow="blurred">
      </lux-hexagon>
      <h1 class="open-sans">Vocé é a <b style="text-transform: uppercase">{{ result }}</b></h1>
    </div>
    <lux-quiz-progress :percentage="percentage"></lux-quiz-progress>
  </div>
</template>

<script>
  import LuxHexagon from '~components/LuxHexagon.vue'
  import LuxHeader from '~components/LuxHeader.vue'
  import LuxIndicatorRight from '~components/LuxIndicatorRight.vue'
  import LuxQuizProgress from '~components/LuxQuizProgress.vue'
  import { mapMutations } from 'vuex'
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
        answeredList: [],
        end: false,
        result: ''
      }
    },
    methods: {
      next (index) {
        this.answeredList.push(index)

        if (this.currentIndex + 1 === this.quiz.questions.length) {
          this.currentIndex += 1
          this.end = true
          this.setResult()
        } else this.currentIndex += 1
      },
      setResult () {
        let arr = this.answeredList
        let result = arr.sort((a, b) =>
          arr.filter(v => v === a).length - arr.filter(v => v === b).length
        ).pop()
        this.result = this.quiz.results[result]
        this.setAsDone(this.$route.params)
      },
      ...mapMutations({
        setAsDone: 'setAsDone'
      })
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
        return (this.currentIndex / this.quiz.questions.length) * 100
      }
    }
  }
</script>

<style lang="scss" scoped>
  .quiz {
    position: relative;
    width: 500px;
  }

  .hexagon-icon {
    width: 58px;
    height: 67px;
    font-size: 24px;
    font-weight: bold;
    margin: 0;
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

  .result {

    h1 {
      margin-top: 30px;
      text-align: center;
      color: white;

    }
  }
</style>
