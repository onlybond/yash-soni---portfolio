<template>
  <div class="sphereFollow">
    <p>{{ circleText }}</p>
  </div>
</template>

<script>
export default {
  name: "SphereFollow",
  data() {
    return {
      sphereFollowScale: 0,
      circleText: ""
    }
  },
  mounted() {
    const sphereFollow = document.querySelector(".sphereFollow")
    document.body.addEventListener("mousemove", (e)=>{
      let x = e.clientX - sphereFollow.offsetLeft
      let y = e.clientY - sphereFollow.offsetTop
      sphereFollow.style.transform = "rotateX(" + -y + "deg) rotateY(" + x + "deg) scale("+this.sphereFollowScale+")"
    })
  },
  methods: {
    follow: function (text){
      this.circleText = text
      this.sphereFollowScale = 1
    },
    unfollow: function (){
      this.sphereFollowScale = 0
    }
  }
}
</script>

<style scoped>
.sphereFollow {
  width: 100px;
  height: 100px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale3d(1, 1, 1);
  transform-style: preserve-3d;
  transition: all 0.5s ease;
}

.sphereFollow p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Optional styling to make the sphere look more 3D */
.sphereFollow:before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5);
}

.sphereFollow:after {
  content: '';
  position: absolute;
  top: 50%;
  left: -50%;
  width: 100%;
  height: 50%;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5);
  transform-origin: bottom center;
  transform: rotateX(90deg);
}
</style>
