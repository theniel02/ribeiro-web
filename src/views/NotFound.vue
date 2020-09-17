<template>
  <div class="page">
        <div class="text">
            404
          <br>
          Not Found
          <br>
          <br>
      </div>
      <div class="link">
        <router-link  to="/home" >Home</router-link>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.page {

  flex-direction: column;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
}

.text {
  flex: 2;
}
.link {
  display: flex;
  flex: 1;
}

.link router-link {
  color: #FFF;
  text-decoration: none;
}

</style>