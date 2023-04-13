<template>
  <section class="loader">
    <section class="hambContentWrapper ">

      <nav class="hambContentContainer">
        <div class="hambContentSide">
          <ul class="imageBox">
            <li class="image-work"><img src="@/assets/background/hamb-menu/1-work.jpeg" alt=""></li>
            <li class="image-studio"><img src="@/assets/background/hamb-menu/2-studio.jpeg" alt=""></li>
            <li class="image-news"><img src="@/assets/background/hamb-menu/3-news.jpeg" alt=""></li>
            <li class="image-contact"><img src="@/assets/background/hamb-menu/4-work.jpeg" alt=""></li>
          </ul>
          <li class="anim opacity-6 hWhite" ><a href="">Play Reel</a></li>
        </div>
        <div class="hambContentSide txtWhite">
          <article>
            <ul style="font-size: 3rem">
              <li @mouseenter="hIndex('image-work')" class="anim"><a href="">Work</a></li>
              <li @mouseenter="hIndex('image-studio')" class="anim"><a href="">Studio</a></li>
              <li @mouseenter="hIndex('image-news')" class="anim"><a href="">News</a></li>
              <li @mouseenter="hIndex('image-contact')" class="anim"><a href="">Contact</a></li>
            </ul>
            <ul class="">
              <li class="anim hWhite opacity-6"><a href="">Behance</a></li>
              <li class="anim hWhite opacity-6"><a href="">Dribble</a></li>
              <li class="anim hWhite opacity-6"><a href="">Twitter</a></li>
              <li class="anim hWhite opacity-6"><a href="">Instagram</a></li>
            </ul>
          </article>
          <span class="flex fsText">
            <li class="anim opacity-6 hWhite"><a href="">Our story</a></li>
            <ArrowAnim text="Let's work together" main-color="White" arrow-color="Black"></ArrowAnim>
          </span>
        </div>

      </nav>
    </section>
  </section>
</template>

<script>
import ArrowAnim from "@/components/textsComponents/ArrowAnim";
import gsap from "gsap"
import CustomEase from "gsap/CustomEase"
export default {
  name: "Loader",
  components: {
    ArrowAnim
  },
  data(){
    return {
      lastActive: "image-work"
    }
  },
  methods: {

    hIndex: function (classToActive){
      if(this.lastActive != classToActive){
        var test = CustomEase.create("superEase", "0.165, 0.84, 0.44, 1");
        gsap.set('.imageBox li', {zIndex: 0})
        gsap.set('.'+classToActive, {zIndex: 7})


        gsap.to('.'+classToActive, {opacity: 1, rotate: 0,scale: 1, duration: 1, ease: "superEase"})
        gsap.set('.imageBox li', {opacity: 0, rotate: "10deg", scale: 1.4})

        this.lastActive = classToActive
      }


    }
  }
}
</script>

<style scoped>

</style>