<template>
  <div class="loader">
    <
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
