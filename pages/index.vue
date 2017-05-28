<template>
  <div class="container mid-aligner" style="height: 100vh;">
    <lux-hexagon id="logo" class="mid-aligner" width="500" height="500" type="shaded" shadow="blurred">
      <img src="/img/luxx-logo.svg" alt="Logo" class="logo">
    </lux-hexagon>
    <lux-hexagon id="hexagon-a" class="mid-aligner" width="400" height="400" type="border" shadow="smaller">
      <h1>clique aqui</h1>
      <h2>para começarmos</h2>
    </lux-hexagon>
    <lux-hexagon id="hexagon-b" width="400" height="400" type="border-gray" shadow="smaller"></lux-hexagon>
  </div>
</template>

<script>
  import LuxHexagon from '~components/LuxHexagon.vue'
  export default {
    data () {
      return {}
    },
    components: {
      LuxHexagon
    }
  }
</script>

<style scoped>
  .logo {
    position: absolute;
    z-index: 100;
    height: 500px;
  }

  #logo {
    z-index: 5;
  }

  #hexagon-a {
    position: absolute;
    right: 50px;
    bottom: 200px;
    flex-direction: column;
    z-index: 3;
  }

  #hexagon-b {
    position: absolute;
    right: 30px;
    bottom: 170px;
  }

  h1, h2 {
    font-family: Gotham, sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 22px;
  }

  h1 {
    color: white;
    margin-top: 50px;
  }

  h2 {
    color: #D9D9D9;
  }
</style>
