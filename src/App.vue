<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // 监听刷新事件
    window.addEventListener("unload", this.savaState);
    // 监听页面载入事件
    window.addEventListener("load", this.changeFontSize)
    // 监听页面尺寸变化事件
    window.addEventListener("resize", this.changeFontSize)
  },
  methods: {
    savaState() {
      localStorage.setItem("state", JSON.stringify(this.$store.state.user))
    },
    // 改变根字体大小
    changeFontSize() {
      let w = document.documentElement.clientWidth;
      console.log(w + 'px')
      let n = w/1900*10 + 'px';
      document.documentElement.style.fontSize=n;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;

  /*默认字体大小*/
  font-size: 2rem;
}
</style>
