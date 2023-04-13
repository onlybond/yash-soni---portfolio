<template>


  
  <Header></Header>
  <Loader></Loader>


  <main class="page">
    <router-view/>

  </main>
</template>


<script>
import Header from "@/components/Header";
import Loader from "@/components/Loader";
export default {


  components: {
    Header,
    Loader
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




#app {
  font-family: $ffLausanne300;



}
body{
  margin: 0;
  background: $white;
}




</style>
