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
    const circleFollow = document.querySelector(".circleFollow")
    document.body.addEventListener("mousemove", (e)=>{

      circleFollow.style.transform = "translate(" + (e.clientX  + 10) + "px," + (e.clientY  + 10) + "px) scale("+this.circleFollowScale+") rotateX("+(-1*(e.clientY/window.innerHeight)*20)+"deg)"
    })

  },
  methods: {

    follow: function (text){
      this.circleText = text
      this.circleFollowScale = 1
      const circleFollow = document.querySelector(".circleFollow")
      circleFollow.style.transform += "perspective(1000px)"
    },
    unfollow: function (){
      this.circleFollowScale = 0
      const circleFollow = document.querySelector(".circleFollow")
      circleFollow.style.transform = "translate(-10000px,-10000px)"
    }
  }
}
</script>
