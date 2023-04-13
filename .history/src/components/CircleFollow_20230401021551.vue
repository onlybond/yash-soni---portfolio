<template>
  <span class="circleFollow">
    <p>{{ circleText }}</p>
  </span>
</template>

<script>
export default {
  name: "CircleFollow",
  data() {
    return {
      circleFollowScale: 0,
      circleText: ""
    }
  },
  mounted() {

    //cercle qui suit la souris
    const circleFollow = document.querySelector(".circleFollow")
    document.body.addEventListener("mousemove", (e)=>{

      circleFollow.style.transform = "translate(" + (e.clientX  + 10) + "px," + (e.clientY  + 10) + "px) scale("+this.circleFollowScale+")"
    })

  },
  methods: {

    follow: function (text){
      this.circleText = text
      this.circleFollowScale = 1
    },
    unfollow: function (){
      this.circleFollowScale = 0
    }
  }
}
</script>

<style scoped>
  .circleFollow{
  position: fixed;
  z-index: 15;
  pointer-events: none;
  width: 80px;
  height: 80px;
  top: 0;left: 0;
  border-radius: 50%;
  transform: translate(0, 0) scale(0);
  transition: all 0.7s cubic-bezier(0.165, 0.84, 0.44, 1);
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(20px);
  -webkit-tap-highlight-color: transparent;
  // filter: blur(1px);
  // opacity: 0.8;
  display: grid;
  place-items: center;
  p{
    color: $white;

  }
}
</style>