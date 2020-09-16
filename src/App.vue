<template>
  <div id="app">
    <router-view /> 
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
html, body {
  background-color: #000000;
  height: 100%;
  width: 100%;

}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


#app {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ededed;
}
</style>
