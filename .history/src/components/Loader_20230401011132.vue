<template>
  <div v-if="showLoader" class="loader">
    <div class="overlay"></div>
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
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 0;
  animation: fade-in 1s ease forwards;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.overlay::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: #fff;
  z-index: 1;
  animation: fill-up 3s ease forwards;
  animation-delay: 1s;
}

@keyframes fill-up {
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
}
</style>
