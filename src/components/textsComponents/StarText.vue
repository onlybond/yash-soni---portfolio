<template>
  <span class="starText">
    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" data-v-669b4a84=""><path :class="['fill'+color]" d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" data-v-669b4a84=""></path></svg>
    <p :class="['fsText', 'txt'+color]" data-scroll>{{text}}</p>
  </span>
</template>

<script>
export default {
  name: "StarText",
  props: {
    text: String,
    color: String
  }
}
</script>

<style lang="scss">
  .starText{
    display: flex;
    align-items: center;
    gap: 20px;
  }
  svg{
    width: 20px;
    height: 20px;
  }


</style>