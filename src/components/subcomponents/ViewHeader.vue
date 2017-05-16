<template>
  <header class="row">
    <router-link :to="{ name: first.route }" tag="span" class="col">< {{ first.text }}</router-link>
    <span class="col">{{ name }}</span>
    <router-link v-if="last" :to="{ name: last.route }" tag="span" class="col">{{ last.text }} ></router-link>
    <span v-else class="col"></span>
  </header>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    first: Object,
    name: String,
    last: Object
  }
}
</script>

<style lang="scss" scoped>
  header {
    background-color: black;
    color: white;
    font-family: 'Space Mono', monospace;
    font-size: 24px;
    min-height: 30px;
    padding: 10px 20px;

  & > span:nth-of-type(1) {
        cursor: pointer;
      }

    & > span:nth-of-type(2) {
      cursor: default;
      text-align: center;
    }

    & > span:nth-of-type(3) {
      cursor: pointer;
      text-align: right;
    }
  }
</style>
