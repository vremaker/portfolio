<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="px-3 navbar fixed-top">
      <b-navbar-brand class="display" to="/">Valerie Remaker</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="body-cop">
          <b-nav-item to="/about">About Me</b-nav-item>
          <b-nav-item href="#">My Work</b-nav-item>
          <b-nav-item href="#">Let's Connect</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>
  .display {
    font-family: 'Playfair Display', serif;
  }
  .body-cop {
    font-family: 'Raleway', sans-serif;
  }
</style>