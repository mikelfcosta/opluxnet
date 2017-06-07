<template>
  <div class="container mid-aligner" style="height: 100vh; flex-direction: column;">
    <lux-header :breadcrumbs="['home', '>', 'plus', '>', 'crime-ou-liberdade']" type="white"></lux-header>
    <div v-if="!started" class="mid-aligner" style="flex-direction: column">
      <lux-hexagon type="faded" shadow="blurred" width="160" height="190" class="mid-aligner page-icon">
        <img src="/img/ico-crime.svg" class="category-icon" alt="Crime">
      </lux-hexagon>
      <h1>Crime ou Liberdade?</h1>
      <h3>Entre nesse quizz e teste seus conhecimentos sobre as leis digitais do nosso país</h3>
      <lux-circle-button :size="200">
      <span style="width: 200px; height: 200px;" class="mid-aligner" @click="start">
        <img src="/img/play-button.svg" alt="Comecar" height="75" style="position: relative; left: 5px">
      </span>
      </lux-circle-button>
    </div>
    <div v-else-if="!end">
      <h2>{{ current.question }}</h2>
      <div class="answers-container mid-aligner">
        <lux-hexagon :type="hexagonYes" shadow="blurred" width="128" height="150" class="mid-aligner answer-button">
          <span class="mid-aligner" @click="answer(1)">Sim</span>
        </lux-hexagon>
        <lux-hexagon :type="hexagonNo" shadow="blurred" width="128" height="150" class="mid-aligner answer-button">
          <span class="mid-aligner" @click="answer(0)">Não</span>
        </lux-hexagon>
      </div>
      <p v-if="current.answered">{{ current.details }}</p>
      <lux-circle-button :size="100" class="right-fixed">
        <span style="width: 100px; height: 100px;" class="mid-aligner" @click="next">
          <img src="/img/ico-forward.svg" alt="Comecar" height="40" style="position: relative; left: 5px">
        </span>
      </lux-circle-button>
      <lux-quiz-progress :current="index" :total="quiz.length"
                         v-if="!end" :hideOrbs="true"></lux-quiz-progress>
    </div>
    <div v-else>
      <div class="crime-result" :class="{ 'good': correctAnswers >= 6 }">
        <h2>
          {{ correctAnswers >= 6 ? 'Quem é o hacker agora?!' : 'Hackeado, de novo! ' }}
        </h2>
        <p>
          {{ correctAnswers >= 6 ? `Parabéns! você acertou ${correctAnswers} das 9 perguntas!` : `Infelizmente, você acertou ${correctAnswers} das 9 perguntas` }}
        </p>
      </div>
      <p v-if="correctAnswers >= 6">
        Seu conhecimento prova seu interesse por sua liberdade digital!<br>
        Porém é importante que outros também a conquistem para que a igualdade seja alcançada
      </p>
      <p v-else>
        Ter pleno conhecimento deste assunto, ajuda na conquista da sua liberdade digital!<br>
        Porém é importante que outros também a conquistem para que a igualdade seja alcançada
      </p>
      <lux-share-buttons class="bottom-right"></lux-share-buttons>
    </div>
    <lux-help></lux-help>
  </div>
</template>

<script>
  import LuxHeader from '~components/LuxHeader.vue'
  import LuxHexagon from '~components/LuxHexagon.vue'
  import LuxCircleButton from '~components/LuxCircleButton.vue'
  import LuxQuizProgress from '~components/LuxQuizProgress.vue'
  import LuxShareButtons from '~components/LuxShareButtons.vue'
  import LuxHelp from '~components/LuxHelp.vue'
  export default {
    data () {
      return {
        started: false,
        end: false,
        index: 0,
        correctAnswers: 0,
        quiz: [
          {
            question: 'Espalhar nudes é crime?',
            answer: 1,
            answered: false,
            details: ' I - inviolabilidade da intimidade e da vida privada, sua proteção e indenização pelo dano material ou moral decorrente de sua violação;'
          },
          {
            question: 'Cyberbullying é crime?',
            answer: 1,
            answered: false,
            details: ' I - inviolabilidade da intimidade e da vida privada, sua proteção e indenização pelo dano material ou moral decorrente de sua violação;'
          },
          {
            question: 'Baixar jogos/músicas da internet é crime?',
            answer: 0,
            answered: false,
            details: 'É crime usar para fins lucrativos, somente.'
          },
          {
            question: 'Hackear o facebook de alguém é crime?',
            answer: 1,
            answered: false,
            details: ' "Art. 11. Em qualquer operação de coleta, armazenamento, guarda e tratamento de registros, de dados pessoais ou de comunicações por provedores de conexão e de aplicações de internet em que pelo menos um desses atos ocorra em território nacional, deverão ser obrigatoriamente respeitados a legislação brasileira e os direitos à privacidade, à proteção dos dados pessoais e ao sigilo das comunicações privadas e dos registros."'
          },
          {
            question: 'É crime assistir pornografia?',
            answer: 0,
            answered: false,
            details: ' "“Oferecer, trocar, disponibilizar, transmitir, distribuir, publicar ou divulgar (…) vídeo (…) que contenha cena de sexo explícito ou pornográfica envolvendo criança ou adolescente” (art. 241-A) “Adquirir, possuir ou armazenar (…) vídeo (…) que contenha cena de sexo explícito ou pornográfica envolvendo criança ou adolescente” (art. 241-B)"'
          },
          {
            question: 'É crime falar mal de político pela internet?',
            answer: 0,
            answered: false,
            details: 'I - garantia da liberdade de expressão, comunicação e manifestação de pensamento, nos termos da Constituição Federal;'
          },
          {
            question: 'Ao deletar uma conta de e-mail, seus dados devem ser totalmente apagados do banco de dados?',
            answer: 1,
            answered: false,
            details: '"X - exclusão definitiva dos dados pessoais que tiver fornecido a determinada aplicação de internet, a seu requerimento, ao término da relação entre as partes, ressalvadas as hipóteses de guarda obrigatória de registros previstas nesta Lei;"'
          },
          {
            question: 'Você acha que uma empresa de internet pode ter projetos secretos?',
            answer: 0,
            answered: false,
            details: '"III - promoção da racionalização e da interoperabilidade tecnológica dos serviços de governo eletrônico, entre os diferentes Poderes e âmbitos da Federação, para permitir o intercâmbio de informações e a celeridade de procedimentos;"'
          },
          {
            question: 'O Whatsapp pode guardar registros de uma conversa?',
            answer: 0,
            answered: false,
            details: '"Subseção II Da Guarda de Registros de Acesso a Aplicações de Internet na Provisão de Conexão Art. 14.  Na provisão de conexão, onerosa ou gratuita, é vedado guardar os registros de acesso a aplicações de internet."'
          }
        ],
        answers: [],
        current: {}
      }
    },
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
    methods: {
      start () {
        this.started = true
        this.current = this.quiz[this.index]
      },
      answer (value) {
        if (this.quiz[this.index].answered === false) {
          this.quiz[this.index].answered = true
          this.current.answered = true
          this.answers.push(value)
        }
      },
      next () {
        let self = this
        if (!this.quiz[this.index].answered) return
        if (this.index + 1 !== this.quiz.length) {
          this.index += 1
          this.current = this.quiz[this.index]
        } else {
          this.end = true
          this.index += 1
          this.quiz.forEach((quiz, index) => {
            if (quiz.answer === self.answers[index]) self.correctAnswers += 1
          })
        }
      }
    },
    computed: {
      hexagonYes () {
        if (this.current.answered === true && this.answers[this.index] === 1) {
          if (this.quiz[this.index].answer === this.answers[this.index]) return 'faded-green'
          else return 'faded-red'
        } else return 'faded'
      },
      hexagonNo () {
        if (this.current.answered === true && this.answers[this.index] === 0) {
          if (this.quiz[this.index].answer === this.answers[this.index]) return 'faded-green'
          else return 'faded-red'
        } else return 'faded'
      }
    },
    components: {
      LuxHeader,
      LuxHexagon,
      LuxCircleButton,
      LuxQuizProgress,
      LuxShareButtons,
      LuxHelp
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    width: 100%;
    text-align: center;
    color: white;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    padding: 20px;
    font-size: 60px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.8)
  }

  h2 {
    width: 100%;
    text-align: center;
    color: white;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    padding: 20px;
    font-size: 48px;
  }

  h3 {
    width: 100%;
    text-align: center;
    color: white;
    font-family: "Open Sans", sans-serif;
    padding: 20px;
  }

  p {
    font-size: 18px;
    font-family: "Open Sans", sans-serif;
    color: white;
    text-align: center;
    padding: 20px;
  }

  .answers-container {
    padding: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.8)
  }

  .answer-button {
    margin: 10px;

    & > span {
      color: white;
      font-family: Pexico, monospace;
      font-size: 28px;
      height: 150px;
      width: 128px;
    }
  }

  .right-fixed {
    position: absolute;
    right: 0;
    top: calc(50% - 50px);
  }

  .crime-result {
    width: 100vw;
    color: white;
    font-family: "Open Sans", sans-serif;
    margin-top: 20px;
    padding: 20px;
    text-align: center;
    background-color: rgba(255,0,0,0.3);

    &.good {
      background-color: rgba(0,255,0,0.3);
    }

    h2 {
      font-size: 48px;
      font-weight: bold;
    }

    p {
      font-size: 24px;
    }
  }
</style>
