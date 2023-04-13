<template>
  <div class="loading-container center loading-transition" ref="container">
    <svg
      viewBox="0 0 108 106"
      class="loading-transition"
      xmlns="http://www.w3.org/2000/svg"
      data-v-76b59a5e=""
      ref="svg"
    >
      <rect id="test" x="0" y="0" width="108" height="106" ref="rect"></rect>
      <image href="@/assets/logo2.svg" width="100" height="100"></image>
    </svg>
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",
  props: {
    setLoadingVisible: Function,
  },
  mounted() {
    //loading progress
    this.$refs.rect.style.height = 0;

    setTimeout(() => {
      //logo transition
      this.$refs.svg.style.height = "2vw";
      this.$refs.svg.style.opacity = 0;

      //container transition
      this.$refs.container.style.clipPath =
        "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";

      //update container visibility
      setTimeout(() => {
        this.setLoadingVisible(false);
      }, 900);
    }, 2300);
  },
};
</script>

<style scoped>
.loading-svg path {
  fill: #0d0e13;
}

.loading-container svg {
  height: 7.5vw;
  background: #e4e0db;
}

.loading-container rect {
  fill: #38383b;
  transition: 2s;
}

.loading-container {
  background: #0d0e13;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 999;
  transform-origin: right center;
  height: calc(100% + 250px);
  padding-bottom: 250px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 250px));
}

.loading-transition {
  transition: 0.9s cubic-bezier(0.6, 0, 0.25, 1);
}
</style>
