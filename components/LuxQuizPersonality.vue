<template>
  <div>
    <div class="quiz" v-if="!current.end">
      <!--<lux-hexagon width="394" height="462" type="flat" shadow="blurred"></lux-hexagon>-->
      <div class="question open-sans">
        <h1>{{ question.question }}</h1>
        <div class="answers">
          <lux-hexagon width="58" height="67" type="flat" shadow="blurred" class="mid-aligner hexagon-choice"
                       v-for="(answer, index) in question.answers" key="index">
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
      <lux-circle-button :size="75" action="goBack" class="back-button">
        <img src="/img/ico-back.svg" alt="Voltar" width="40">
      </lux-circle-button>
      <lux-hexagon width="395" height="463" type="image" shadow="blurred"
                   :style="{ background: `url(/img/quiz/${result.img}) no-repeat center`, backgroundSize: 'cover' }"></lux-hexagon>
      <div class="result-details mid-aligner">
        <h1 class="open-sans">Você é <b style="text-transform: uppercase">{{ result.result }}</b></h1>
        <p class="open-sans">{{ result.description }}</p>
        <div class="mid-aligner" style="width: 100%;">
          <lux-result-button :size="75"></lux-result-button>
        </div>
      </div>
    </div>
    <lux-quiz-progress :current="current.answers.length" :total="quiz.questions.length"
                       v-if="!current.end"></lux-quiz-progress>
  </div>
</template>

<script>
  import LuxHexagon from '~components/LuxHexagon.vue'
  import LuxIndicatorRight from '~components/LuxIndicatorRight.vue'
  import LuxQuizProgress from '~components/LuxQuizProgress.vue'
  import LuxCircleButton from '~components/LuxCircleButton.vue'
  import LuxResultButton from '~components/LuxResultButton.vue'
  import { mapGetters } from 'vuex'
  export default {
    name: 'LuxQuizPersonality',
    data () {
      return {}
    },
    props: ['quiz'],
    created () {
      this.$store.dispatch('setQuiz', {quiz: this.quiz, category: this.$route.params.category})
    },
    methods: {
      next (index) {
        this.$store.dispatch('addAnswer', index)
      }
    },
    computed: {
      ...mapGetters({current: 'getCurrentQuiz', result: 'setAndGetResult'}),
      question () {
        return this.current.quiz.questions[this.current.answers.length]
      }
    },
    components: {
      LuxHexagon,
      LuxQuizProgress,
      LuxIndicatorRight,
      LuxCircleButton,
      LuxResultButton
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

  .back-button {
    margin-right: 30px;
  }
</style>
