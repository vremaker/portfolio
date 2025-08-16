<template>
  <div id="nav-holder">
    <BNavbar
      toggleable="lg"
      type="light"
      :class="{ sticky: isSticky }"
      ref="stickyElement"
      class="sticky-target"
    >
      <BNavbarBrand href="#">Valerie Helen Grace Remaker </BNavbarBrand>

      <BNavbarToggle target="nav-collapse">
         <span class="custom-toggler-icon">☰</span>
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
          <BNavItem href="#">projects</BNavItem>
          <BNavItem href="#">resume</BNavItem>
          <BNavItem href="#">me</BNavItem>
        </BNavbarNav>
     </BCollapse>
    </BNavbar>
  </div>
</template>

<script>
import { BNavbarToggle } from 'bootstrap-vue-3'
import { BNavbarNav } from 'bootstrap-vue-next';
export default {
    components: {
    BNavbarToggle
  },
  mounted() {
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
    },
  },
  data() {
    return {
      isSticky: false,
      stickyOffset: 50,
    };
  },
};
</script>
<style scoped>
.sticky-target {
  position: relative;
  transition: all 0.3s ease;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: white !important;
}
</style>

