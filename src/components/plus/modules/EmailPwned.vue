<template>
  <div>
    <p>Você está no módulo para ver se seu e-mail já vazou na internet.</p>
    <router-link :to="{name: 'HomePlus'}">Voltar a Home</router-link>
  </div>
</template>

<script>
  export default {
    name: 'EmailPwned',
    data () {
      return {}
    }
  }
</script>

<style lang="scss">

</style>
