<template>
  <div id="app">
      <button type="button" @click="getData">获取数据</button>
  </div>
</template>

<script>
export default {
  methods: {
    async getData () {
      const res = await this.$http.post('/login', { uaername: 'ok' })
      console.log(res)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
