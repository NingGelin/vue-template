<template>
  <div class="container">
    <div class="left">

    </div>
    <div class="right">
      <div class="header">
      </div>
      <div class="main">
        <router-view/>
      </div>
      <div class="foot"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style>
.container {
  width: 100%;
  height: 100vh;
  background-color: gainsboro;
  min-height: 80rem;
  min-width: 128rem;
}

.left {
  height: 100%;
  width: 13%;
  background-color: violet;
  float: left;
  position: fixed;
}

.right {
  height: 100%;
  width: calc(100% - 13%);
  float: right;
  background-color: #2c3e50;
}

.header {
  height: 15rem;
  background-color: blue;
  position: fixed;
  width: 100%;
}

.main {
  background-color: wheat;
  /*该值必须等于header的高度*/
  height: auto;
  margin-top: 15rem;
  /*该值必须等于90%-header的高度*/
  min-height: calc(90% - 15rem);
}

.foot {
  /*底部栏高度 如果变化需调整main盒子min-height*/
  height: 10%;
  background-color: yellow;
}
</style>

