<template>
  <header class="pageHeader">
    <div class="textAnimStart-container stateInit">
      <img class="textAnimStart" src="@/assets/logo.svg" alt="">
    </div>
    <nav class="fsText txtWhite">
      <ul class="stateInit">
        <li class="anim textAnimStart-container"><a class="textAnimStart" href="/#">Work</a></li>
        <li class="anim textAnimStart-container"><a class="textAnimStart" href="/#">Studio</a></li>
        <li class="anim textAnimStart-container"><a class="textAnimStart" href="/#">News</a></li>
        <li class="anim textAnimStart-container"><a class="textAnimStart" href="/#">Contact</a></li>



      </ul>
      <div @click="hambClick()" class="hambContainer stateScroll flex">
        <p>Menu</p>
        <div class="hamb">
          <div class="line line1"></div>
          <div class="line line2"></div>
          <div class="line line3"></div>
        </div>
        <div class="croix">
          <div class="croixLine croixLine1"><span></span></div>
          <div class="croixLine croixLine2"><span></span></div>
        </div>

      </div>
    </nav>
  </header>
</template>

<script>
import gsap from "gsap";
import CustomEase from "gsap/CustomEase"
export default {
  name: "Header",
  data() {
    return {
      hambMenuOn: false
    }
  },

  methods: {
    hambClick: function () {



      var test = CustomEase.create("superEase","M0,0 C0.496,0.004 0,1 1,1")
      /*create("custom","M0,0 C0.198,0 1,0.1 1,1")
      create("custom","M0,0 C0,0.202 0.204,1 1,1")*/

      if (!this.hambMenuOn){

        //hide hamb
        var crossHamb = gsap.timeline();
        crossHamb.add("hideHamb")
        crossHamb.add("hideShow")
        crossHamb.add("showCross")

        crossHamb.to('.line1', {scaleX: 0,duration: 0.1, ease: "linear"}, "hideHamb")
        crossHamb.to('.line2', {scaleX: 0,duration: 0.1, ease: "linear", delay: 0.12}, "hideHamb")
        crossHamb.to('.line3', {scaleX: 0,duration: 0.1, ease: "linear", delay: 0.22}, "hideHamb")

        crossHamb.set(".hamb", {display: "none", delay: 0.35}, "hideShow")


        crossHamb.set(".croix", {display: "flex", delay: 0.35}, "hideShow")
        crossHamb.to(".croixLine1 span", {scaleX: 1,rotate:-45, duration: 0.2, ease: "linear", delay: 0.37}, "showCross")
        crossHamb.to(".croixLine2 span", {scaleX: 1,rotate:45, duration: 0.2, ease: "linear", delay: 0.47}, "showCross")



        var show = gsap.timeline();
        show.set('.hambContentWrapper', {display: "block"})
        show.add('down')
        show.to(".loader",{translateY: "-50%",rotate:7, duration: 1, ease: "superEase"}, 'down')
        show.to('.page', {rotate: 7, scale: "1.4", translateY: "5%", duration: 1, ease: "superEase"}, 'down')
        this.hambMenuOn = true
        return
      }
      if(this.hambMenuOn){

        gsap.to(".croixLine1 span", {scaleX: 0,rotate:-45, duration: 0.2, ease: "linear"})
        gsap.to(".croixLine2 span", {scaleX: 0,rotate:45, duration: 0.2, ease: "linear", delay: 0.15})

        gsap.set('.croix', {display: "none", delay: 0.50})

        //show hamb
        gsap.set('.hamb', {display: "flex", delay: 0.51})
        gsap.to('.line3', {scaleX: 1,duration: 0.1, ease: "linear", delay: 0.52})
        gsap.to('.line2', {scaleX: 1,duration: 0.1, ease: "linear", delay: 0.64})
        gsap.to('.line1', {scaleX: 1,duration: 0.1, ease: "linear", delay: 0.74})


        var hide = gsap.timeline();
        hide.add('up')
        hide.to(".loader",{translateY: "-150%",rotate:0, duration: 1, ease: "superEase"}, 'up')
        hide.to('.page', {rotate: 0,scale: "1", translateY: "0", duration: 1, ease: "superEase"}, 'up')
        hide.set('.hambContentWrapper', {display: "none"})
        this.hambMenuOn = false
        return ""
      }


    }
  }
}
</script>
