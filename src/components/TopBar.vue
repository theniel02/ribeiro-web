<template>
  <div class="top-bar" variant="danger">
    <div class="title">
      {{ this.currentPage }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  
  computed:{
    ...mapState ({
      currentPage: state => state.currentPage
    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
  background: #dc3545;
  box-shadow: 0 0 20px 0px #ff5d5d;
}

.brand{

}

</style>
