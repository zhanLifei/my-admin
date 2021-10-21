<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import "@/styles/base.scss";
export default {

}
</script>
<style>

html,body {
  margin: 0;
  padding: 0;
  color: #333;
    background-image: linear-gradient(
  90deg
  ,rgba(50,0,0,.05) 3%,transparent 0),linear-gradient(
  1turn
  ,rgba(50,0,0,.05) 3%,transparent 0);
  background-size: 20px 20px;
  background-position: 50%;
}
#app {
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
