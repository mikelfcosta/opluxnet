<template>
  <div>
    <p>Você está na Home Plus!</p>
    <router-link :to="{name: 'LegalQuiz' }">Crime ou Liberdade</router-link>
    <router-link :to="{name: 'InternetPremium' }">Internet Premium</router-link>
    <router-link :to="{name: 'PasswordSecurity' }">Segurança de sua Senha</router-link>
    <router-link :to="{name: 'EmailPwned' }">Seu e-mail já vazou?</router-link>
    <router-link :to="{name: 'PhishingTest' }">Teste de Phishing</router-link>
  </div>
</template>

<script>
  export default {
    name: 'HomePlus',
    data () {
      return {}
    }
  }
</script>

<style lang="scss">

</style>
