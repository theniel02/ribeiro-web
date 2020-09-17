<template>
  <div id="app">
    <div class="top-bar">
        <TopBar :page=this.currentPage />
    </div>
    <div>
      <div class="side-menu">
        <SideMenu />
      </div>
      <div class="content">
        <router-view /> 
        
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from './components/SideMenu'
import TopBar from './components/TopBar'

export default {
  name: 'app',
  components: {
    SideMenu, TopBar
  },
  data() {
    return {
      isLogaded: false,
      currentPage: 'Login'
    }
  }
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
  background: #000;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ededed;
}

.top-bar {
  position: fixed;
  
}
</style>
