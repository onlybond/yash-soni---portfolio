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
      const x = e.clientX - (window.innerWidth / 2);
      const y = e.clientY - (window.innerHeight / 2);
      const newX = x * 0.1;
      const newY = y * 0.1;
      circleFollow.style.transform = `translate3d(${newX}px, ${newY}px, 0) scale(${this.circleFollowScale})`;
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
  transform: translate3d(0, 0, 0) scale(0);
  transition: all 0.7s cubic-bezier(0.165, 0.84, 0.44, 1);
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(20px);
  -webkit-tap-highlight-color: transparent;
  display: grid;
  place-items: center;
  p{
    color: $white;

  }
}
</style>
