<template>
    <Header></Header>
    <Loader></Loader>
    <main class="page">
      <router-view/>
    </main>
    <MobileMessage class="mobile" v-if="showMobileMessage" />

</template>
<script>
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import MobileMessage from "@/components/MobileMessage";

export default {


  components: {
    Header,
    Loader,
    MobileMessage
  },
  computed: {
    showMobileMessage() {
      return window.innerWidth <= 1024;
    }
  }
}
</script>

<style lang="scss">
  @font-face {
    font-family: "Lausanne-300";
    src: url('@/fonts/TWKLausanne-300.7842412.woff2') format("woff2");
    font-display: swap;
  }
  @font-face {
    font-family: "Lausanne-400";
    src: url('@/fonts/TWKLausanne-400.3ab9e07.woff2') format("woff2");
    font-display: swap;
  }
  @font-face {
    font-family: "Lausanne-500";
    src: url('@/fonts/TWKLausanne-500.e59d791.woff2') format("woff2");
    font-display: swap;
  }
  @import '@/assets/style/variables';
  @import "@/assets/style/components/mainComponents";
  @import "@/assets/style/pages/home";
  @import "@/assets/style/components/header";
  @import "@/assets/style/components/loader-image";
  @import "@/assets/style/utilities.scss";
  @import "@/assets/style/base.css";
  @import "@/assets/style/components/footer";



*{
  overflow: hidden;
}
#app {
  font-family: $ffLausanne300;
  display: flex;
  justify-content: center;
  align-items:center;
}
body{
  margin: 0;
  width: 50%;
  // background: red;
  overflow-y: hidden;
  
  position: relative;
}
.mobile{
  background:green
}
@media (max-width: 1024px) {
  /* hide all other components */
  #app > *:not(.mobile-message) {
    display: none;
  }
  #app > .mobile-message{
    display: flex;
    color:white
  }
}



</style>
