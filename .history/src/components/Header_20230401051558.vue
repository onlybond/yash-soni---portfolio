<template>
  <header class="pageHeader">
    <div class="textAnimStart-container stateInit" v-if="!hambMenuOn">
        <a href="/">
          <img class="anim logo textAnimStart" :src="logoSrc" alt="" />
        </a>
    </div>
    <div class="textAnimStart-container stateInit" v-else>
        <a href="/">
          <img class="anim logo textAnimStart" :src="logoSrc" alt="" />
        </a>
    </div>
    <nav class="fsText txtWhite">
      <ul class="stateInit">
        <li class="anim textAnimStart-container">
          <a class="textAnimStart" href="/#">Work</a>
        </li>
        <li class="anim textAnimStart-container">
          <a class="textAnimStart" href="/#">Studio</a>
        </li>
        <li class="anim textAnimStart-container">
          <a class="textAnimStart" href="/#">News</a>
        </li>
        <li class="anim textAnimStart-container">
          <a class="textAnimStart" href="/#">Contact</a>
        </li>
      </ul>
      <div @click="hambClick()" class="hambContainer stateScroll flex">
        <div class="hamb">
          <div class="line line1"></div>
          <div class="line line2"></div>
          <div class="line line3"></div>
        </div>
        <div class="croix">
          <div class="croixLine croixLine1"><span></span></div>
          <div class="croixLine croixLine2"><span></span></div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

export default {
  name: "Header",
  data() {
    return {
      hambMenuOn: false,
      isHeaderHidden: false,
    };
  },
  computed: {
    logoSrc() {
      return this.isHeaderHidden ? "@/assets/logo2.png" : "@/assets/logo.png";
    },
  },
  methods: {
    hambClick: function () {
      var test = CustomEase.create("superEase", "M0,0 C0.496,0.004 0,1 1,1");
      var logo = this.logoSrc;
      if (!this.hambMenuOn) {
        //hide hamb
        var crossHamb = gsap.timeline();
        crossHamb.set
