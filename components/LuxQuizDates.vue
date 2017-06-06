<template>
  <div>
    <div class="quiz" v-if="!current.end">
      <lux-hexagon width="300" height="350" type="flat" shadow="blurred" class="mid-aligner" style="flex-direction: column">
        <h3>{{ questions[current.answers.length] }}</h3>
        <b-form-input class="date-quiz-input" min="0" max="31" type="number"
                      placeholder="Digite aqui..." v-model="answer" @keyup.enter="next"></b-form-input>
        <small class="text-muted" v-show="show">Por favor preencha o campo corretamente</small>
        <b-button class="name-quiz-button" @click="next">Continuar</b-button>
      </lux-hexagon>
    </div>
    <div class="result" v-else>
      <lux-circle-button :size="75" action="goBack" class="back-button">
        <img src="/img/ico-back.svg" alt="Voltar" width="40">
      </lux-circle-button>
      <lux-hexagon width="395" height="463" type="flat" shadow="blurred" class="mid-aligner">
        <h1 class="open-sans" style="text-align: center">Você seria <br><b>{{ result }}</b></h1>
      </lux-hexagon>
      <lux-result-button :size="75" class="result-button"></lux-result-button>
    </div>
  </div>
</template>

<script>
  import LuxHexagon from '~components/LuxHexagon.vue'
  import LuxIndicatorRight from '~components/LuxIndicatorRight.vue'
  import LuxResultButton from '~components/LuxResultButton.vue'
  import LuxCircleButton from '~components/LuxCircleButton.vue'
  import { mapGetters } from 'vuex'
  export default {
    name: 'LuxQuizDates',
    props: ['quiz'],
    data () {
      return {
        answer: '',
        questions: ['Que dia você nasceu?', 'Que mês você nasceu?', 'Que ano você nasceu?'],
        show: false
      }
    },
    created () {
      this.$store.dispatch('setQuiz', { quiz: this.quiz, category: this.$route.params.category })
    },
    computed: {
      ...mapGetters({current: 'getCurrentQuiz', result: 'setAndGetResult'})
    },
    methods: {
      next () {
        if (this.current.answers.length === 0) {
          if (this.answer <= 0 || this.answer > 31) {
            this.show = true
            return
          }
        } else if (this.current.answers.length === 1) {
          if (this.answer <= 0 || this.answer > 12) {
            this.show = true
            return
          }
        } else if (this.current.answers.length === 2) {
          if (this.answer <= 1900 || this.answer > 2015) {
            this.show = true
            return
          }
        }
        this.$store.dispatch('addAnswer', this.answer)
        this.answer = ''
      }
    },
    components: {
      LuxHexagon,
      LuxIndicatorRight,
      LuxResultButton,
      LuxCircleButton
    }
  }
</script>

<style lang="scss" scoped>
  .date-quiz-input {
    width: 250px;
    text-align: center;
    border: none;
    margin-top: 10px;
    border-radius: 0;
    border-bottom: 1px solid lightgray;
  }

  .name-quiz-button {
    margin-top: 20px;
  }

  h3 {
    padding: 0 10px;
    text-align: center;
  }

  .result {
    display: flex;
    align-items: center;
  }

  .back-button {
    margin-right: 30px;
  }

  .result-button {
    margin-left: 30px;
  }
</style>
