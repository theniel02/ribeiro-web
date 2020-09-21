<template>
  <div id="app">
      <Loader class="position-loader" v-if=loaderIsActive />
      <div class="side-menu">
        <SideMenu @click="showLoader()" />
      </div>
    <div class="top-bar">
        <TopBar @click.native="log()"/>
        {{this.testeStore}}
    </div>
    <div class="content">
      <router-view /> 
    </div>
  </div>
</template>

<script>

//Components
import SideMenu from './components/SideMenu'
import TopBar from './components/TopBar'
import Loader from './components/Loader'
//Vuex
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'app',
  components: {
    SideMenu, TopBar, Loader
  },
  computed: {
    ...mapState ({
      loaderIsActive: state => state.loaderIsActive
    })
  },
  data() {
    return {
      isLogaded: false,
      currentPage: 'Login',
    }
  },
  methods: {
    ...mapMutations([
      'showLoader',
    ]),
    log() {
      this.$root.$store.state.currentPage = 'teste';
     console.log(this.$root.$store.state.currentPage);

    }
    },
  mounted() {
    console.log(this.$store.state.currentPage);
  }
  }
</script>

<style>

#app {
  background: #000;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  color: #ededed;
}

.top-bar {
  position: fixed;
  
}

.side-menu{
  height: 100%;
  position: relative;
  left: 0;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
