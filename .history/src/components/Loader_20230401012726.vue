<template>
  <div v-if="showLoader" class="loader">
    <div class="fill"></div>
    <img :src="svgLogo" alt="Logo" class="logo" />
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
  computed: {
    svgLogo() {
      return "data:image/svg+xml,%3Csvg%20version%3D%221.0%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221562.000000pt%22%20height%3D%221562.000000pt%22%20viewBox%3D%220%200%201562.000000%201562.000000%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%3E%0A%09%3Cg%20transform%3D%22translate(0.000000%2C1562.000000)%20scale(0.100000%2C-0.100000)%22%20fill%3D%22%23000000%22%20stroke%3D%22none%22%3E%0A%09%3C%2Fg%3E%0A%3C%2Fsvg%3E";
    },
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
  background-clip: text;
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
</style><template>
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
  background-clip: text;
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