<template>
  <div v-if="showLoader" class="loader">
    <div class="fill"></div>
    <img src="@/assets/logo2.png" alt="Logo" class="logo" />
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
