<template>
  <div class="loader">
    <div class="image-container">
      <img :src="imageSrc" :style="{ opacity: opacity }">
      <div class="overlay"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Loader",
  imageS() {
    return {
      opacity: 0,
      imageSrc: "@/assets/logo2.png",
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
  height: 100vh;
}

.image-container {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
  transition: transform 2s ease-out;
  transform: translateY(-100%);
}

.image-container:hover .overlay {
  transform: translateY(0%);
}
</style>
