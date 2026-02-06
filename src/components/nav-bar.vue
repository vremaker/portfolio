<template>
    <BNavbar
  
      toggleable="lg"
      type="light"
      :class="{ sticky: isSticky }"
      :style="{background: primaryColor}"
      ref="stickyElement"
      class="sticky-target sticky top-0 z-50"
      sticky="top"
    >
      <router-link to="/" @click="scrollToTop" class="button">
          <BNavbarBrand :style="{color: accentColor}" href="">Valerie Remaker </BNavbarBrand>
</router-link>  
      <BNavbarToggle target="nav-collapse">
         <span :style="{color: accentColor}" class="custom-toggler-icon">☰</span>
      </BNavbarToggle> 
       <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
  <span class="custom-toggler-icon">☰</span>
</button> -->

     <BCollapse
        id="nav-collapse"
        class="d-flex-md justify-content-end"
        is-nav
      >
        <BNavbarNav>
          <router-link :to="{ path: '/', hash: '#portfolio' }" class="button"> <BNavItem  href="#"><span  :style="{color: accentColor}">projects</span></BNavItem></router-link>
          <router-link :to="{ path: '/me' }" @click="scrollToTop" class="button"><BNavItem href="#"><span  :style="{color: accentColor}"> about me</span></BNavItem></router-link>
          <BNavItem href="https://drive.google.com/file/d/1NUT5X41K9irl5SBB76dpzCVG5AYOMNSS/view?usp=sharing" target="_blank"><span  :style="{color: accentColor}">resume</span></BNavItem>
         
        </BNavbarNav>
     </BCollapse>
    </BNavbar>
</template>

<script>
import { BNavbarToggle } from 'bootstrap-vue-3';

import { nextTick } from 'vue';
export default {
    components: {
    
    BNavbarToggle
  },
 props: {color: String, textColor: String},

  mounted() { 
   // console.log(this.color);
   this.headerAccent = this.textColor;
   this.accentColor = this.headerAccent;
   this.headerColor = this.color;
   this.primaryColor = this.headerColor;
   console.log(this.accentColor);

    window.addEventListener("scroll", this.handleScroll);
   
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    push() {
      this.$router.push("/");
      window.scrollTo(0, 600);
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    handleScroll() {
      this.isSticky = window.scrollY >= this.stickyOffset;
    
      if(window.scrollY <= 600 && this.$route.path !== "/") {
        this.primaryColor = this.headerColor;
        this.accentColor = this.headerAccent;
      } else if(this.$route.path === "/") {
        this.primaryColor = this.headerColor;
        this.accentColor = this.headerAccent;
      }else {
        this.primaryColor = "#ffffff";
        this.accentColor = "#333333";
      }
    },
  },
  data() {
    return {
      isSticky: false,
      stickyOffset: 50,
      primaryColor: '',
      headerColor: '#333333',
      headerAccent: '',
      accentColor: ''
    };
  },
};
</script>
<style scoped>

.sticky {

z-index: 1200;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
}

</style>

