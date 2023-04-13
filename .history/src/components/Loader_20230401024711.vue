<template>
  <div v-if="showLoader" class="loader">
    <div class="fill"></div>
    <svg
      viewBox="0 0 108 106"
      class="loading-transition"
      xmlns="http://www.w3.org/2000/svg"
      data-v-76b59a5e=""
      ref="svg"
      class
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
      showLoader: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showLoader = false;
    }, 3000);
  },
};
</script>

<style scoped>
.loader {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.logo {
  position: absolute;
  width: 10vw;
  z-index: 1;
  opacity: 0.5;
}

.fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(to top, #fff, #fff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: fill 3s ease forwards;
  z-index: 0;
  opacity: 0.5;
  background-position: bottom;
  background-size: 100% 0;
}

@keyframes fill {
  from {
    background-size: 100% 0;
  }
  to {
    background-size: 100% 100%;
  }
}
</style>
