<template>
  <div class="container mid-aligner" style="height: 100vh; flex-direction: column;">
    <lux-hexagon type="faded" shadow="blurred" width="160" height="190" class="mid-aligner">
      <img src="/img/ico-pwned.svg" class="category-icon" alt="Pwned">
    </lux-hexagon>
    <h1>‘;-- eu já fui invadido?</h1>
    <h3>Veja se sua conta de e-mail já foi comprometida em algum furto de dados</h3>
    <b-input-group class="email-form">
      <b-form-input></b-form-input>

      <!-- Attach Right button -->
      <b-input-group-button slot="right">
        <b-button class="email-button">Invadido?</b-button>
      </b-input-group-button>

    </b-input-group>

    <div class="no-breach-found" v-if="submit && breaches.length === 0">

    </div>
    <div class="breach-found" v-if="submit && breaches.length > 0">

    </div>
  </div>
</template>

<script>
  import LuxHexagon from '~components/LuxHexagon.vue'
  export default {
    data () {
      return {
        submit: false
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
    computed: {
      breaches () {
        return []
      }
    },
    components: {
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
</style>
