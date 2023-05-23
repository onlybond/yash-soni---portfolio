<template>
  <div class="imageContainner"  :id="idUnique" @mouseenter="play()" @mouseleave="pause()" >
    <img :src="realSrc" alt="">
    <video :src="videoSrc" muted loop></video>

    <p class="textContainer">
      <span class="fsText"><strong>{{title}}</strong> {{text}}</span>
    </p>
  </div>
</template>

<script>

export default {
  name: "ImageVideoOnHover",
  data() {
    return {
      realSrc: '',
      videoSrc: '',

    }
  },
  mounted() {

    this.realSrc = require('@/assets/background/' + this.$props.imageLink + ".jpeg")
    this.videoSrc = require('@/assets/background/' + this.$props.imageLink + ".mp4")
  },
  props: {
    imageLink: String,
    idUnique: String,
    title: String,
    text: String
  },
  methods: {
    play: function () {
      const  span = document.querySelector('#'+this.$props.idUnique+' span')
      const video = document.querySelector('#'+this.$props.idUnique+' video')


      video.play()
    },
    pause: function () {
      const video = document.querySelector('#'+this.$props.idUnique+' video')
      video.pause()
    }
  }
}
</script>

<style lang="scss">
.imagesSection__grid{
  margin: 20rem 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-column-gap: 2.3vw;
  position: relative;

  .imagesSectionText{
    grid-column: 9/13;
    grid-row: 1;

  }
  .imageContainner{
    position: relative;
    &:hover img{
      z-index: 0;
    }
    &:hover video{
      z-index: 1;
    }
    &:hover .textContainer span {
      transform: translateY(0);
      transform-origin: bottom left;
    }
  }
  img{z-index: 1}
  video{z-index: 0}
  img, video{
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    pointer-events: none;
  }


  .one{
    grid-column: 2/8;
    grid-row: 1/3;

    img{

      aspect-ratio: 1/1.2;
    }
  }
  .two{
    margin-top: 90%;
    grid-column: 9/13;
    grid-row: 2/4;
    height: 32.84vw;
  }
  .three{
    margin-top: 10%;
    grid-column: 6/11;
    height: 41.6vw;
  }
  .four{
    grid-column: 2/5;
    grid-row-start: 5;
    margin-top: -50%;
    height: 23.8vw;
  }
  .textContainer{
    height: fit-content;

    overflow: hidden;
    position: absolute;bottom: -15px;left: 0;
    transform: translateY(140%) translateX(200px);
    span{
      height: fit-content;
      display: block;
      transform: translateY(-120%) rotate(-5deg);
      transition: transform 0.9s cubic-bezier(0.165, 0.84, 0.44, 1);
      transform-origin: top left;
    }

  }

}
</style>