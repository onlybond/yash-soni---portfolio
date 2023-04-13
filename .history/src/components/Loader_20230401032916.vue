<template>
  <div class="loader">
    <img src="@/assets/logo1.png" alt="logo" class='logo'>
    <div class='overlay'></div>
  </div>
</template>

<script>
export default {
  name: "Loader",
  data() {
    return {
      opacity: 0
    }
  },
  mounted() {
    const duration = 3000 // duration in milliseconds
    const interval = 16 // interval in milliseconds

    let elapsed = 0
    const timer = setInterval(() => {
      elapsed += interval
      this.opacity = elapsed / duration

      if (elapsed >= duration) {
        clearInterval(timer)
      }
    }, interval)
  }
}
</script>

<style scoped>
.loader {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo{
  height:20vh;
  z-index:1;
}
.overlay{
  position:absolute;
  width:20vh;
  height:20vh;
  background:#fff;
  z-index:-1;
}
@keyframes SlideIn{
  0%{transform:translateY()}
  100%{}
}
</style>
