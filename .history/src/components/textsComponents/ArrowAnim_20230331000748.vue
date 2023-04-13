<template>
  <span class="studio flecheAnim" >

      <div :class="['flecheAnimCircle', 'border'+mainColor]">

        <div :class="['whiteCircle', 'bg'+mainColor]">
          <div class="blackArrow">
            <svg data-v-5152decb="" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-arrow"><path :class="['fill'+arrowColor]" data-v-5152decb="" d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z" fill="black"></path></svg>

          </div>
        </div>
      </div>
      <a :class="['a'+mainColor, 'txt'+mainColor]" href="" >{{ text }}</a>

    </span>
</template>

<script>
export default {
  name: "ArrowAnim",

  props: {
    text: String,
    link: String,
    mainColor: String,
    arrowColor: String
  }
}
</script>

<style scoped>
  .blackArrow{
    
  }
</style>