<template>
  <div class="loader">
    <svg
  viewBox="0 0 108 106"
  class="loading-transition"
  xmlns="http://www.w3.org/2000/svg"
  data-v-76b59a5e=""
  ref="svg"
>
  <rect id="test" x="0" y="0" width="108" height="106" ref="rect"></rect>
  <image href="@/assets/logo2.svg" width="100" height="100"></image>
</svg>

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
</style>
