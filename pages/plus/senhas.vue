<template>
  <div class="container mid-aligner" style="height: 100vh; flex-direction: column;">
    <lux-header :breadcrumbs="['home', '>', 'plus', '>', 'senhas']" type="white"></lux-header>
    <lux-hexagon type="faded" shadow="blurred" width="160" height="190" class="mid-aligner">
      <img src="/img/ico-password.svg" class="category-icon" alt="Pwned">
    </lux-hexagon>
    <h1>Quão segura é a minha senha?</h1>
    <b-form-input id="password" v-model="password" type="password" @keyup="testPassword"
                  class="password-form"></b-form-input>
    <script src="/js/hsimp.min.js"></script>
    <div class="result hsimp-level" v-if="time" :class="{ 'good': good }">
      <p>Um computador levaria</p>
      <h2>{{ time }}</h2>
      <p>para descobrir sua senha.</p>
    </div>
    <p v-if="time"><a href="https://github.com/howsecureismypassword/hsimp">API oferecida por HSIMP</a></p>
    <lux-share-buttons class="bottom-right"></lux-share-buttons>
  </div>
</template>

<script>
  import LuxHeader from '~components/LuxHeader.vue'
  import LuxHexagon from '~components/LuxHexagon.vue'
  import LuxShareButtons from '~components/LuxShareButtons.vue'
  export default {
    data () {
      return {
        password: '',
        time: '',
        good: false
      }
    },
    methods: {
      testPassword () {
        let self = this
        // eslint-disable-next-line
        hsimp.setPeriodDictionary([
          {
            'singular': 'yoctosegundo',
            'plural': 'yoctosegundos',
            'seconds': 1e-24
          },
          {
            'singular': 'zeptosecond',
            'plural': 'zeptoseconds',
            'seconds': 1e-21
          },
          {
            'singular': 'attosecond',
            'plural': 'attoseconds',
            'seconds': 1e-18
          },
          {
            'singular': 'femtosecond',
            'plural': 'femtoseconds',
            'seconds': 1e-15
          },
          {
            'singular': 'picosecond',
            'plural': 'picoseconds',
            'seconds': 1e-12
          },
          {
            'singular': 'nanosegundo',
            'plural': 'nanosegundos',
            'seconds': 1e-9
          },
          {
            'singular': 'microsecond',
            'plural': 'microseconds',
            'seconds': 1e-6
          },
          {
            'singular': 'milissegundo',
            'plural': 'milissegundos',
            'abbreviations': ['ms', 'msec'],
            'seconds': 1e-3
          },
          {
            'singular': 'segundo',
            'plural': 'segundos',
            'abbreviations': ['s', 'segundo', 'segundo'],
            'seconds': 1
          },
          {
            'singular': 'minuto',
            'plural': 'minutos',
            'abbreviations': ['m', 'min', 'mins'],
            'seconds': 60
          },
          {
            'singular': 'hora',
            'plural': 'horas',
            'abbreviations': ['h'],
            'seconds': 3600
          },
          {
            'singular': 'dia',
            'plural': 'dias',
            'seconds': 86400
          },
          {
            'singular': 'semana',
            'plural': 'semanas',
            'seconds': 604800
          },
          {
            'singular': 'mês',
            'plural': 'meses',
            'seconds': 2626560
          },
          {
            'singular': 'ano',
            'plural': 'anos',
            'seconds': 31557600
          }
        ])

        // eslint-disable-next-line
        hsimp.setNamedNumberDictionary({
          'Cem': 2,
          'Mil': 3,
          'Milhões': 6,
          'Bilhões': 9,
          'Trilhões': 12,
          'Quadrillion': 15,
          'Quintillion': 18,
          'Sextilismo': 21,
          'Septillion': 24,
          'Ocultação': 27,
          'Nonillion': 30,
          'Decillion': 33,
          'Undecillion': 36,
          'Duodecillion': 39,
          'Tredecillion': 42,
          'Quattuordecillion': 45,
          'Quindecillion': 48,
          'Sexdecillion': 51,
          'Septendecillion': 54,
          'Octodecillion': 57,
          'Novemdecillion': 60,
          'Vigintillion': 63,
          'Unvigintillion': 66,
          'Duovigintillion': 69,
          'Tresvigintillion': 72,
          'Quattuorvigintillion': 75,
          'Quinquavigintilion': 78,
          'Sesvigintillion': 81,
          'Septemvigintillion': 84,
          'Octovigintillion': 87,
          'Novemvigintillion': 90,
          'Trigintilhão': 93,
          'Untrigintillion': 96,
          'Duotrigintilion': 99,
          'Googol': 100,
          'Trestrigintillion': 102,
          'Quattuortrigintillion': 105,
          'Quinquatrigintilion': 108,
          'Sestrigintilion': 111,
          'Septentrigintillion': 114,
          'Octotrigintilhão': 117,
          'Noventrigintillion': 120,
          'Quadragintillion': 123,
          'Quinquagintilhão': 153,
          'Sexagintillion': 183,
          'Septuagintillion': 213,
          'Octogintilhão': 243,
          'Nonagintillion': 273,
          'Centilion': 303,
          'Uncentillion': 306,
          'Duocentillion': 309,
          'Trescentilion': 312,
          'Decquertilhão': 333,
          'Undecicentillion': 336,
          'Viginticentillion': 363,
          'Unviginticentillion': 366,
          'Trigintacentillion': 393,
          'Quadragintacentillion': 423,
          'Quinquagintacentillion': 453,
          'Sexagintacentillion': 483,
          'Septuagintacentillion': 513,
          'Octogintacentillion': 543,
          'Nonagintacentillion': 573,
          'Ducentillion': 603,
          'Trecentilion': 903,
          'Quadringentillion': 1203,
          'Quingentillion': 1503,
          'Sescentillion': 1803,
          'Septingentillion': 2103,
          'Octingentillion': 2403,
          'Nongentillion': 2703,
          'Millinillion': 3003
        })
        // eslint-disable-next-line
        hsimp({
          options: {
            calculationsPerSecond: 1e10,
            good: 31557600e3,
            ok: 31557600
          },
          outputTime (time) {
            self.time = time
          },
          outputChecks (checks) {
            console.log(checks)
            self.good = checks.length === 0
            if (checks[0]) {
              if (checks[0].level === 'achievement') self.good = true
            }
          }
        }, document.getElementById('password'))
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
    components: {
      LuxHeader,
      LuxHexagon,
      LuxShareButtons
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

  .password-form {
    height: 60px;
    text-align: center;
    font-size: 18px;
  }

  .result {
    width: 100vw;
    color: white;
    font-family: "Open Sans", sans-serif;
    margin-top: 20px;
    padding: 20px;
    text-align: center;
    background-color: rgba(255,0,0,0.3);
    transition: all 250ms ease;

    h2 {
      font-size: 48px;
      font-weight: bold;
    }

    p {
      font-size: 24px;
    }

    &.good {
      background-color: rgba(0,255,0,0.3);
    }

  }

  a {
    margin-top: 20px;
    color: rgba(255,255,255, 0.5);
    text-decoration: none;
    font-style: italic;

    &:hover {
      color: white;
    }
  }
</style>
