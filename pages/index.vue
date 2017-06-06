<template>
  <div class="container mid-aligner" style="height: 100vh;">
    <lux-hexagon id="logo" class="mid-aligner" width="440" height="500" type="shaded" shadow="blurred">
      <img src="/img/luxx-logo.svg" alt="Logo" class="logo">
    </lux-hexagon>
    <lux-hexagon id="hexagon-a" class="mid-aligner" width="360" height="400" type="border" shadow="smaller">
    </lux-hexagon>
    <lux-hexagon id="hexagon-a" class="mid-aligner pointer"
                 width="360" height="400" type="border-hover" state="login">
      <h1>clique aqui</h1>
      <h2>para começarmos</h2>
      <span id="play-button"></span>
    </lux-hexagon>
    <lux-hexagon id="hexagon-b" width="360" height="400" type="border-gray" shadow="smaller"></lux-hexagon>
    <lux-help></lux-help>
  </div>
</template>

<script>
  import LuxHexagon from '~components/LuxHexagon.vue'
  import LuxHelp from '~components/LuxHelp.vue'
  export default {
    data () {
      return {}
    },
    components: {
      LuxHexagon,
      LuxHelp
    }
  }
</script>

<style lang="scss" scoped>
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

    #play-button {
      background: url("/img/play-button.svg");
      width: 38px;
      height: 44px;
      transition: all 200ms ease;
    }

    &:hover {
      h1 {
        color: #3391AA;
      }

      h2 {
        color: gray;
      }

      #play-button {
        background: url("/img/play-button-hover.svg");
        width: 38px;
        height: 44px;
      }
    }
  }

  #hexagon-b {
    position: absolute;
    right: 30px;
    bottom: 170px;
  }

  @media all and (min-width: 992px) and (max-width: 1200px) {
    #hexagon-a {
      right: 0;
      bottom: 140px;
    }

    #hexagon-b {
      right: -20px;
      bottom: 110px;
    }
  }

  @media all and (min-width: 768px) and (max-width: 991px) {
    #hexagon-a {
      right: 0;
      bottom: 70px;
    }

    #hexagon-b {
      right: -20px;
      bottom: 40px;
    }
  }

  h1, h2 {
    font-family: Gotham, sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 22px;
    transition: all 200ms ease;
  }

  h1 {
    color: white;
    margin-top: 100px;
  }

  h2 {
    color: #D9D9D9;
  }
</style>
