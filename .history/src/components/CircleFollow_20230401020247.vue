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
      const circleFollow = document.querySelector(".circleFollow")
      circleFollow.style.filter = "blur(10px)"
      circleFollow.style.opacity = "0.7"
    },
    unfollow: function (){
      this.circleFollowScale = 0
      const circleFollow = document.querySelector(".circleFollow")
      circleFollow.style.filter = "none"
      circleFollow.style.opacity = "1"
    }
  }
}
</script>
<style scoped>
.circleFollow {
  position: fixed;
  display: inline-block;
  border-radius: 50%;
  background-color: #2196F3;
  color: #fff;
  font-size: 16px;
  padding: 10px;
  cursor: default;
  z-index: 9999;
  transition: transform 0.3s ease-in-out;
}
</style>