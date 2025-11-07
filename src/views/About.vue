<template>
  <Nav />
  
</template>

<script>

import Nav from "@/components/nav-bar";

export default {

  components: {
    Nav
  },
  data() {
    return {
      width: window.innerWidth,
    };
  },
  created() {
    window.addEventListener("resize", this.yo);
  },
  destroyed() {
    window.removeEventListener("resize", this.yo);
  },
  mounted() {
    if (window.innerWidth < 992) {
      document.querySelector("#img").classList.add("hidden");
      document.querySelector("#mobile").classList.remove("hidden");
      document.querySelector("#text-box").classList.remove("large");
    } else {
      document.querySelector("#img").classList.remove("hidden");
      document.querySelector("#mobile").classList.add("hidden");
      document.querySelector("#text-box").classList.add("large");
    }
  },
  methods: {
    yo(e) {
      if (window.innerWidth < 992) {
        document.querySelector("#img").classList.add("hidden");
        document.querySelector("#mobile").classList.remove("hidden");
        document.querySelector("#text-box").classList.remove("large");
      } else {
        document.querySelector("#img").classList.remove("hidden");
        document.querySelector("#mobile").classList.add("hidden");
        document.querySelector("#text-box").classList.add("large");
      }
    },
  },
};
</script>
<style scoped>

.hidden {
  display: none !important;
}
</style>
