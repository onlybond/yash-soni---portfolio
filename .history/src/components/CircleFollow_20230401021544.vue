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
  
</style>