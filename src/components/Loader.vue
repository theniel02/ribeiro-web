<template>
<div class="loader-page">
  <div class="loader">
  </div>
</div>
  
</template>

<script>
export default {

}
</script>

<style>
:root{
--loaderHeight: 120px;
--loaderWidth: 120px;
}

.loader-page{
  position: fixed;
  z-index: 999999;
  width: 100%;
  height: 100%;
  background-color: #000000aa;
}

.loader {
  position:absolute;
  z-index: 999999;
  margin: auto auto;
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid var(--danger); /* Blue */
  border-radius: 50%;
  width: var(--loaderWidth);
  height: var(--loaderHeight);
  animation: spin 2s linear infinite;
  margin-left: calc(50% + var(--loaderWidth)/2);
  margin-top: calc(20% + var(--loaderHeight)/2);
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>