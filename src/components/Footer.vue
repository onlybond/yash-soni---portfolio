<template>
  <footer data-scroll-section class="txtSand ffFutura" data-scroll-position="bottom">
    <div class="container" data-scroll data-scroll-speed="-5" data-scroll-offset="-10%">


      <div class="footerFirstDiv">
        <h2 class="fsh2 letter-spacing-h1" data-scroll>
          <span>Our<br>Story</span>
          <span>

            <video playsinline="" loop="loop" muted="muted" autoplay>
              <source src="@/assets/videos/footer.mp4" type="video/mp4" data-v-4a179df6="">
            </video>
          </span>

        </h2><br>
        <p class="fsh3 opacity-8" data-scroll>
          The story behind Exo Ape is one of <br>exploration, creativity and curiosity.
        </p>

        <span class="line opacity-8"></span>
      </div>
      <div class="flex between footerSecondDiv opacity-8">
        <nav class="footerNavs flex fsText">
          <ul>
            <li class="anim sand"><a href="">Swalmestraat 78</a></li>
            <li class="anim sand"><a href="">6041 CZ, Roermond</a></li>
            <li class="anim sand"><a href="">The Netherlands</a></li>
            <li class="anim sand"><a href="">hello@exoape.com</a></li>
          </ul>


          <ul>
            <li class="anim sand"><a href="">Work</a></li>
            <li class="anim sand"><a href="">Studio</a></li>
            <li class="anim sand"><a href="">News</a></li>
            <li class="anim sand"><a href="">Contact</a></li>
          </ul>
          <ul>
            <li class="anim sand"><a href="">Behance</a></li>
            <li class="anim sand"><a href="">Dribble</a></li>
            <li class="anim sand"><a href="">Titter</a></li>
            <li class="anim sand"><a href="">Instagram</a></li>
          </ul>

        </nav>

        <arrow-anim data-scroll text="Our story" arrow-color="Story" main-color="Sand"></arrow-anim>
      </div>
    </div>


  </footer>
</template>

<script>
import ArrowAnim from "@/components/textsComponents/ArrowAnim";
export default {
  name: "Footer",
  components: {
    ArrowAnim
  }

}
</script>