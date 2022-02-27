<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="px-3 navbar fixed-top">
      <b-navbar-brand class="display" to="/">Valerie Remaker</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="body-cop">
          <b-nav-item to="/portfolio" @click="scrollToTop">My Work</b-nav-item>
          <b-nav-item
            target="_blank"
            href="https://drive.google.com/file/d/1NUT5X41K9irl5SBB76dpzCVG5AYOMNSS/view?usp=sharing"
            >My Resume</b-nav-item
          >
          <b-nav-item @click="scrollToTop" to="/About">About Me</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  methods: {
    push() {
      this.$router.push("/");
      window.scrollTo(0, 600);
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>

</style>