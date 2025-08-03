<template>
  <div id="nav-holder">
    <b-navbar
      toggleable="lg"
      type="light"
      :class="{ sticky: isSticky }"
      ref="stickyElement"
      class="sticky-target"
    >
      <b-navbar-brand href="#">Valerie Helen Grace Remaker </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse">
         <span class="custom-toggler-icon">☰</span>
      </b-navbar-toggle>
       <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
  <span class="custom-toggler-icon">☰</span>
</button> -->

      <b-collapse
        id="nav-collapse"
        class="d-flex-md justify-content-end"
        is-nav
      >
        <b-navbar-nav>
          <b-nav-item href="#">projects</b-nav-item>
          <b-nav-item href="#">resume</b-nav-item>
          <b-nav-item href="#">me</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
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

