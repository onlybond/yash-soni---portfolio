<template xmlns="http://www.w3.org/1999/html">
  <circle-follow ref="circleFollow"></circle-follow>

  <section class="check containerHero" id="containerHero" data-scroll-section id="hero">

    <div class="background" @mouseenter="follow('Scroll')" @mouseleave="unfollow()">
      <picture data-scroll data-scroll-repeat="true" data-scroll-offset="50%, 50%">
        <img src="@/assets/background/Meinthesun.png" alt="" data-scroll data-scroll-speed="-3"
          data-scroll-position="top">
        // <img src="@/assets/background/ysh2.png" alt="" data-scroll data-scroll-speed="-3" data-scroll-position="top">
      </picture>
    </div>
    <section class="container" id="hero-target" data-scroll data-scroll-position="top">

      <div class="textHero">
        <article class="intro fsh3 txtWhite">
          <p class="textAnimStart-container" data-scroll><span class="textAnimStart">Intrigued by beauty, fascinated by
              technology</span></p>
          <p class="textAnimStart-container" data-scroll><span class="textAnimStart">and fuelled with an everlasting
              devotion to digital</span></p>
          <p class="textAnimStart-container" data-scroll><span class="textAnimStart">craftsmanship and meaningful
              aesthetics.</span></p>
        </article>

        <article class="title fsh1 txtWhite">
          <p class="textAnimStart-container" data-scroll><span class="textAnimStart">Creative Director</span></p>
          <p class="textAnimStart-container" data-scroll><span class="textAnimStart">//Designer</span></p>
        </article>


      </div>
      <article class="underTitle">
        <p class="paragraphe fsh3 txtWhite">Hi, I am a self made Graphic Designer and have been exploring my interests in
          Multimedia Design via my degree in Multimedia and Animation.</p>
      </article>


    </section>
  </section>
  <!-- End of Hero-->

  <section class="container sectionHome2" data-scroll-section>

    <h3 class="work ffFutura fsh1 letter-spacing-h1" data-scroll data-scroll-call="Work">
      <span>Work</span>
    </h3>
    <section class="imagesSection__grid" data-scroll>
      <article class="imagesSectionText txtBlack" data-scroll>
        <star-text text="Featured Projects" color="Black"></star-text>
        <p class="fsh3" data-scroll>Highlights of cases that we passionately built with forward-thinking clients and
          friends over the years.</p>
      </article>
      <image-video-on-hover @mouseenter="follow('view')" @mouseleave="unfollow()" class="one"
        image-link="images_sections/1" id-unique="one" title="Ali Ali" text="Unique director’s portfolio"
        data-scroll></image-video-on-hover>
      <image-video-on-hover @mouseenter="follow('view')" @mouseleave="unfollow()" class="two"
        image-link="images_sections/2" id-unique="two" title="Ottografie" text="Immersive photography portfolio"
        data-scroll data-scroll-speed="1.3"></image-video-on-hover>
      <image-video-on-hover @mouseenter="follow('view')" @mouseleave="unfollow()" class="three"
        image-link="images_sections/3" id-unique="three" title="Rino & Pelle" text="Effortless chic lifestyle" data-scroll
        data-scroll-speed="1.15"></image-video-on-hover>
      <image-video-on-hover @mouseenter="follow('view')" @mouseleave="unfollow()" class="four"
        image-link="images_sections/4" id-unique="four" title="Aebele Interiors" text="Luxurious design experience"
        data-scroll data-scroll-speed="-1.4"></image-video-on-hover>
    </section>
    <section class="imagesSection__grid" data-scroll>
      <article class="imagesSectionText txtBlack" data-scroll>
        <!-- <star-text text="Featured Projects" color="Black"></star-text> -->
        <!-- <p class="fsh3" data-scroll>Highlights of cases that we passionately built with forward-thinking clients and
            friends over the years.</p> -->
      </article>
      <image-video-on-hover @mouseenter="follow('view')" @mouseleave="unfollow()" class="one"
        image-link="images_sections/1" id-unique="five" title="Ali Ali" text="Unique director’s portfolio"
        data-scroll></image-video-on-hover>
      <image-video-on-hover @mouseenter="follow('view')" @mouseleave="unfollow()" class="two"
        image-link="images_sections/2" id-unique="six" title="Ottografie" text="Immersive photography portfolio"
        data-scroll data-scroll-speed="1.3"></image-video-on-hover>
      <image-video-on-hover @mouseenter="follow('view')" @mouseleave="unfollow()" class="three"
        image-link="images_sections/3" id-unique="seven" title="Rino & Pelle" text="Effortless chic lifestyle" data-scroll
        data-scroll-speed="1.15"></image-video-on-hover>
      <image-video-on-hover @mouseenter="follow('view')" @mouseleave="unfollow()" class="four"
        image-link="images_sections/4" id-unique="eight" title="Aebele Interiors" text="Luxurious design experience"
        data-scroll data-scroll-speed="-1.4"></image-video-on-hover>
      <arrow-anim class="flechePhotos" text="Browse all work" main-color="Black" arrow-color="White"></arrow-anim>
    </section>
  </section>
  <section class="sectionHome3" data-scroll-section ref="section">
    <!-- <h3 class="work ffFutura fsh1 letter-spacing-h1" data-scroll >
      <span>Education</span>
      <span>&amp; Experience</span>
    </h3> -->
    <div class="edu-title" data-scroll>
      <div class="empty"></div>
      <div class="title-container overlay" data-scroll>
        <span class="title" data-scroll>Education</span>
        <span class="title" data-scroll>&amp; Experience</span>
      </div>
    </div>
    <div class="section-content">
      <ul data-scroll>
        <li data-scroll>
          <div class="overlay" data-scroll>
            <span class="year" data-scroll>2006-2017</span>
            <span class="description" data-scroll>St. Michael's</span>
          </div>
        </li>
        <li data-scroll>
          <div class="overlay" data-scroll>
            <span class="year" data-scroll>2017-2019</span>
            <span class="description" data-scroll>Loyola Academy Junior</span>
          </div>
        </li>
        <li data-scroll>
          <div class="overlay" data-scroll>
            <span class="year" data-scroll>2020-2023</span>
            <span class="description" data-scroll>Loyola Academy Degree</span>
          </div>
        </li>
        <li data-scroll>
          <div class="overlay" data-scroll>
            <span class="year" data-scroll>2015-2019</span>
            <span class="description" data-scroll>Freelancing</span>
          </div>
        </li>
        <li data-scroll>
          <div class="overlay" data-scroll>
            <span class="year" data-scroll>2022-present</span>
            <span class="description" data-scroll>Blur'd</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <section class="EventManagement" data-scroll-section id="home-news-sec">

    <ul data-scroll data-scroll-speed="-1" data-scroll-position="top">
      <li class="media" data-scroll><img src="@/assets/background/spreadTheNews/home-news-1.jpeg" alt=""></li>
      <li class="media two" data-scroll data-scroll-direction="horizontal" data-scroll-speed="0.75"
        data-scroll-target="#home-news-sec">
        <video playsinline="" loop="loop" muted="muted" autoplay>
          <source src="@/assets/background/spreadTheNews/home-news-diesel-be-a-follower.mp4" type="video/mp4"
            data-v-4a179df6="">
        </video>
      </li>
      <li class="media three" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-1"
        data-scroll-target="#home-news-sec">
        <img loading="lazy" src="@/assets/background/spreadTheNews/home-news-2.jpeg" alt="">
      </li>
      <li class="media four" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-1.4"
        data-scroll-target="#home-news-sec">
        <video playsinline="" loop="loop" muted="muted" autoplay>
          <source src="@/assets/background/spreadTheNews/home-news-4.mp4" type="video/mp4" data-v-4a179df6="">
        </video>
      </li>
      <li class="media five" data-scroll data-scroll-direction="horizontal" data-scroll-speed="1"
        data-scroll-target="#home-news-sec">
        <img loading="lazy" src="@/assets/background/spreadTheNews/home-news-5.jpeg" alt="">
      </li>
    </ul>

    <div class="text" data-scroll data-scroll-speed="2" data-scroll-position="bottom">
      <!-- <star-text text="In the media" color="Black" data-scroll></star-text> -->
      <h1 class="fsh2 flex flexColumn letter-spacing-h1" data-scroll>
        <span data-scroll>Event</span>
        <span data-scroll>Management</span>
      </h1>
      <p class="fsh3" data-scroll>Find out more about our work on our official instagram page</p>
      <arrow-anim text="Browse all news" main-color="Black" arrow-color="White" link= "instagram.com" data-scroll></arrow-anim>

    </div>

  </section>

  <MyFooter></MyFooter>
</template>

<script>
// @ is an alias to /src
import gsap from 'gsap'
import CustomEase from 'gsap/CustomEase'
import HomeSection3 from "@/components/HomeSection3.vue";
import LocomotiveScroll from 'locomotive-scroll'

import Header from "@/components/Header";
import CircleFollow from "@/components/CircleFollow";
import ArrowAnim from "@/components/textsComponents/ArrowAnim";
import StarText from "@/components/textsComponents/StarText";
import ImageVideoOnHover from "@/components/ImageVideoOnHover";
import MyFooter from "@/components/Footer";
gsap.registerPlugin(CustomEase);


export default {
  name: 'HomeView',
  components: {
    Header,
    ArrowAnim,
    StarText,
    CircleFollow,
    ImageVideoOnHover,
    MyFooter,
    HomeSection3
  },
  data() {
    return {
      headerOn: true,
      hambOn: false,
      videoSecOffset: 3 * (document.documentElement.clientWidth / 100),
      updated: false
    }
  },
  methods: {
    //follow and unfollow are functions for the circle that follows the mouse
    follow: function (text) {
      this.$refs.circleFollow.follow(text)
    },
    unfollow: function () {
      this.$refs.circleFollow.unfollow()
    },


  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.$refs.section.classList.add("animate");
        }
      });
    }, { threshold: 0.5 });
    observer.observe(this.$refs.section);
    const imageScaleUp = document.querySelector("#videoScaleUp")
    const videoSecText = document.querySelector(".videoSecText")

    const headerNav = document.querySelector(".pageHeader nav")


    var test = CustomEase.create("superEase", "0.165, 0.84, 0.44, 1");
    var test2 = CustomEase.create("Yash SonisuperEase", "M0,0 C0.496,0.004 0,1 1,1")




    /*landing animation*/
    var load = gsap.timeline({ delay: 2 });
    load.add('start')
    /*load.from(".loader",{scaleY: 1, delay: 3, duration: .8, ease: "superEase"}, 'start')

    load.from(".background",{translateY: "110%",rotate:8, delay: 3, duration: .7, ease: "superEase"}, "start")
    load.from(".loader",{translateY: "-50%",rotate:7, delay: 3.2, duration: 1.1, ease: "superEase"}, "start")
    /*load.set(".loader", {display: "none"})
    load.from(".textAnimStart", {y: "180%", duration: 1.2, rotate: 6, delay:"4", ease: "superEase"}, "start")*/

    //v2
    load.to(".loader", { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", delay: 0.2, duration: 1, ease: "Yash SonisuperEase" }, "start")
    load.from(".background", { translateY: "105%", rotate: "20deg", scale: 3, duration: 1, ease: "Yash SonisuperEase" }, "start")
    load.from(".textAnimStart", { y: "180%", duration: 1.2, rotate: 6, ease: "superEase" })
    load.set(".loader", { display: "none" })



    //init of locomotiveScroll
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      lerp: 0.1,
    });

    //UPDATE the scroll to avoid various problems
    scroll.on('call', (e) => {
      if (!this.updated) {
        console.log(e)
        this.updated = true
        scroll.update()
      }
    })

    //evenement, when we scroll...
    scroll.on("scroll", (e) => {
      //animation of the video and the texte(pin section)
      if (e.currentElements.el20) {

        if (e.currentElements.el20.el.classList[0] == "bgBlack") {
          var progress = e.currentElements.el20.progress * 0.75 + 0.27
          var progressText = e.currentElements.el20.progress * 0.55

          imageScaleUp.style.transform = "scale(" + progress + ")"
          videoSecText.style.gap = 60 - progressText * 100 + "%"
        }
      }
      // When we start scrolling, the header disappear
      if (e.scroll.y > 35 && this.headerOn == true) {

        gsap.set('.stateInit', { opacity: 0 })
        gsap.set('.stateInit', { display: "none", delay: 0.3 })

        this.headerOn = false




      } else if (e.scroll.y < 35 && this.headerOn == false) {

        gsap.set('.pageHeader', { justifyContent: "space-between", delay: 0.3 })
        gsap.set('.stateInit', { display: "flex", delay: 0.3 })
        gsap.set('.stateInit', { opacity: 1, delay: 0.35 })

        this.headerOn = true
      }



      if (e.scroll.y > 95 && this.hambOn == false) {// we show the hamburger

        gsap.set('.pageHeader', { justifyContent: "space-between", delay: 0.3 })
        gsap.set('.stateScroll', { display: "flex", delay: 0.3 })
        gsap.set('.stateScroll', { opacity: 1, delay: 0.35 })

        this.hambOn = true




      } else if (e.scroll.y < 95 && this.hambOn == true) { // we hide the hamburger


        gsap.set('.stateScroll', { opacity: 0 })
        gsap.set('.stateScroll', { display: "none", delay: 0.3 })

        this.hambOn = false
      }
    })
    
    const section2 = document.querySelector('.sectionHome2')
    if (section2.classList.contains('is-inview')) {
      console.log("black")
    }
  }

}
</script>

