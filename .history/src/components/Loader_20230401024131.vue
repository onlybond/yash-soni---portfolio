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
      this.$refs.container.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";

      //update container visibility
      setTimeout(() => {
        this.setLoadingVisible(false);
      }, 900);
    }, 2300);
  },
};
</script>

<style scoped>

</style>
