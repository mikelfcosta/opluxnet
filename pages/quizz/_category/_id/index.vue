<template>
  <div class="container mid-aligner" style="height: 100vh">
    <lux-header>
    </lux-header>
    <lux-circle-button :size="50" class="top-right" v-if="!end">
      <img src="/img/ico-back.svg" alt="Voltar" width="25">
    </lux-circle-button>
    <lux-share-buttons class="top-right" v-else>

    </lux-share-buttons>
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
      <div class="result-details mid-aligner">
        <h1 class="open-sans">Você é <b style="text-transform: uppercase">{{ result.result }}</b></h1>
        <p class="open-sans">{{ result.description }}</p>
      </div>
    </div>
    <lux-quiz-progress :current="currentIndex" :total="quiz.questions.length" v-if="!end"></lux-quiz-progress>
  </div>
</template>

<script>
  import LuxHexagon from '~components/LuxHexagon.vue'
  import LuxHeader from '~components/LuxHeader.vue'
  import LuxIndicatorRight from '~components/LuxIndicatorRight.vue'
  import LuxQuizProgress from '~components/LuxQuizProgress.vue'
  import LuxCircleButton from '~components/LuxCircleButton.vue'
  import LuxShareButtons from '~components/LuxShareButtons.vue'
  import { mapMutations } from 'vuex'
  export default {
    components: {
      LuxHexagon,
      LuxHeader,
      LuxIndicatorRight,
      LuxCircleButton,
      LuxQuizProgress,
      LuxShareButtons
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
    display: flex;
    align-items: center;

    &-details {
      margin-left: 40px;
      flex-direction: column;
      justify-content: left;
      align-items: flex-start;
    }

    h1 {
      color: white;
    }

    p {
      max-width: 400px;
      color: white;
    }
  }

  .top-right {
    position: absolute;
    right: 0;
    top: 20px;
    flex-direction: column;
  }
</style>
