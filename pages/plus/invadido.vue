<template>
  <div class="container mid-aligner" style="height: 100vh; flex-direction: column;">
    <lux-header :breadcrumbs="['home', '>', 'plus', '>', 'invadido']" type="white"></lux-header>
    <lux-hexagon type="faded" shadow="blurred" width="160" height="190" class="mid-aligner">
      <img src="/img/ico-pwned.svg" class="category-icon" alt="Pwned">
    </lux-hexagon>
    <h1>‘;-- eu já fui invadido?</h1>
    <h3>Veja se sua conta de e-mail já foi comprometida em algum furto de dados</h3>
    <b-input-group class="email-form">
      <b-form-input v-model="email" @keyup.enter="searchBreaches"></b-form-input>
      <b-input-group-button slot="right">
        <b-button class="email-button" @click="searchBreaches">Invadido?</b-button>
      </b-input-group-button>

    </b-input-group>

    <div class="no-breach-found" v-if="submit && breaches.length === 0">
      <h2>Boas notícias - nenhuma invasão encontrada!</h2>
      <p>nenhuma conta <u>com brechas</u> e sem <u>colas</u></p>
    </div>
    <div class="breach-found" v-if="submit && breaches.length > 0">
      <div class="breach-found-header">
        <h2>Putz, invadido!</h2>
        <p>Invadido em {{ breaches.length }} <u>sites com brechas</u>, e sem <u>colas</u></p>
      </div>
      <div class="breach-found-body">
        <div class="container">
          <h3>Brechas por onde você foi invadido</h3>
          <p>Uma “brecha” é um evento onde os dados de um site são ilegalmente acessados por hackers e depois expostos publicamente. Analise os tipos de dados que foram comprometidos (contas de e-mail, senhas, cartões de crédito etc...) e tome as medidas necessárias, como trocar de senha.</p>
          <ul>
            <li v-for="breach in breaches">Dados comprometidos em <b>{{ breach.Title }}</b>: {{ breach.DataClasses.toString() }}</li>
          </ul>
          <p><a href="http://haveibeenpwned.com">API oferecida por "HaveIBeenPwned"</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LuxHeader from '~components/LuxHeader.vue'
  import LuxHexagon from '~components/LuxHexagon.vue'
  import axios from 'axios'
  export default {
    data () {
      return {
        submit: false,
        breaches: [],
        email: ''
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
      searchBreaches () {
        if (this.email === '') {
          this.submit = false
          return
        }
        axios.get('https://haveibeenpwned.com/api/v2/breachedaccount/' + this.email)
          .then(response => {
            this.breaches = response.data
            this.submit = true
          })
          .catch(err => {
            console.error(err)
            this.submit = true
          })
      }
    },
    components: {
      LuxHeader,
      LuxHexagon
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
    border-bottom: 1px solid rgba(255,255,255,0.8)
  }

  h3 {
    width: 100%;
    text-align: center;
    color: white;
    font-family: "Open Sans", sans-serif;
    padding: 20px;
  }

  .email-form {
    height: 60px;
  }

  .email-button {
    font-family: Pexico, monospace;
    color: black;
    background-color: #FFFF00;
    border: none;
    max-height: 58px;
  }

  .no-breach-found {
    width: 100vw;
    color: white;
    font-family: "Open Sans", sans-serif;
    margin-top: 20px;
    background-color: rgba(0,255,0,0.3);
    padding: 20px;
    text-align: center;

    h2 {
      font-size: 48px;
      font-weight: bold;
    }

    p {
      font-size: 24px;
    }
  }

  .breach-found {
    width: 100vw;
    color: white;
    font-family: "Open Sans", sans-serif;
    margin-top: 20px;

    &-header {
      background-color: rgba(255,0,0,0.3);
      padding: 20px;
      text-align: center;

      h2 {
        font-size: 48px;
        font-weight: bold;
      }

      p {
        font-size: 24px;
      }
    }

    &-body {
      background-color: rgba(255,0,0,0.15);
      padding: 20px;

      h3 {
        font-weight: bold;
      }

      ul {
        list-style: none;
        padding: 0;
      }

      a {
        color: rgba(255,255,255, 0.5);
        text-decoration: none;
        font-style: italic;

        &:hover {
          color: white;
        }
      }
    }
  }
</style>
