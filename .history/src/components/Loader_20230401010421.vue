<template>
  <div v-if="showLoader" class="loader">
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
  computed: {
    logoSrc() {
      return "@/assets/logo2.png";
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.logo {
  max-width: 50%;
}
</style>
