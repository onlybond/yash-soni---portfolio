<template>
  <div class="loader">
    <img :src="imageSrc" :style="{ opacity: opacity }">
  </div>
</template>

<script>
export default {
  name: "Loader",
  data() {
    return {
      opacity: 0,
      imageSrc: "@/assets/loader-image.png",
      showLoader: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.showLoader = false;
    }, 3000);

    const intervalId = setInterval(() => {
      if (this.opacity < 1) {
        this.opacity += 0.1;
      } else {
        clearInterval(intervalId);
      }
    }, 200);
  },
};
</script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
}
</style>
