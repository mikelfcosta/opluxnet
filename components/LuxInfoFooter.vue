<template>
  <footer>
    <p><img src="/img/icon-navigate.png" alt="Navigate">Navegar entre Telas</p>
    <p><img src="/img/icon-middlemouse.png" alt="Category">Navegar entre Categorias</p>
    <p><img src="/img/icon-leftclick.png" alt="Select">Selecionar</p>
    <p>
      <img src="/img/icon-aboutus.png" alt="About">
      <span>#opLUXXnet</span>
      <span>Equipe NaN</span>
    </p>
  </footer>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  footer {
    position: absolute;
    left: 0;
    bottom: 0;

    p {
      font-family: 'Space Mono', monospace;
      font-size: 14px;
      font-weight: 500;

      & > img {
        padding-right: 10px;
      }
      & > span {
        padding: 0 10px;
        font-size: 18px;
        margin-left: 10px;
        border-bottom: 1px solid black;
        text-align: center;
      }
    }
  }
</style>
