<template>
  <div class="loader">
    <div class="overflow">
      <svg
        viewBox="0 0 108 106"
        class="loading-transition"
        xmlns="http://www.w3.org/2000/svg"
        data-v-76b59a5e=""
        ref="svg"
      >
        <rect
          id="test"
          x="0"
          y="0"
          width="108"
          height="106"
          ref="rect"
          fill="none"
        ></rect>
        <image href="@/assets/logo2.svg" width="100" height="100"></image>
      </svg>
    </div>
    <svg
        viewBox="0 0 108 106"
        class="loading-transition"
        xmlns="http://www.w3.org/2000/svg"
        data-v-76b59a5e=""
        ref="svg"
      >
        <rect
          id="test"
          x="0"
          y="0"
          width="108"
          height="106"
          ref="rect"
          fill="none"
        ></rect>
        <image href="@/assets/logo2.svg" width="100" height="100"></image>
      </svg>
  </div>
</template>

<script>
export default {
  name: "Loader",
  data() {
    return {
      opacity: 0,
    };
  },
  mounted() {
    const duration = 3000; // duration in milliseconds
    const interval = 16; // interval in milliseconds

    let elapsed = 0;
    const timer = setInterval(() => {
      elapsed += interval;
      this.opacity = elapsed / duration;

      if (elapsed >= duration) {
        clearInterval(timer);
      }
    }, interval);
  },
};
</script>

<style scoped>
.loader {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.overflow{
  height:10vw;
  width:8vw;
  overflow:hidden;
}
.overflow svg {
  width: 10vw;
  height: 10vw;
  filter: invert(0.8);
  animation:slideIn 0.8s ease forwards;
}
svg{
  width: 10vw;
  height: 10vw;
  filter: invert(0.8);
  position:absolute;
  z-index:-1;
}
@keyframes slideIn{
  0%{
    transform:translateY(100%);
  }
  100%{
    transform:translateY(0%);
  }
}
</style>
