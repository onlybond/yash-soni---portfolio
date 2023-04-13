<template>
  <div v-if="showLoader" class="loader">
    <div class="fill"></div>
    <img src="@/assets/logo2.svg" alt="Logo" class="logo" />
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
}

.fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom, #fff, #fff);
  background-clip:text;
  -webkit-background-clip: text;
  color: transparent;
  animation: fill 3s ease forwards;
  z-index: 0;
  opacity: 0.5;
}

@keyframes fill {
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
}
</style>