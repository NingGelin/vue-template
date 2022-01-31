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
      localStorage.setItem("state", JSON.stringify(this.$store.state.menu))
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

/*滚轮修改 不知道为啥 设置了这个之后滚轮直接不见了难道滚轮默认白色看不见。看不见正好，需要看见就把下面代码放开*/
::-webkit-scrollbar {
  width: 3px;
  height: 1px;
  border-radius: 5px;
}

/*::-webkit-scrollbar-thumb {*/
/*  border-radius: 5px;*/
/*  background-color: black;*/
/*}*/
</style>
