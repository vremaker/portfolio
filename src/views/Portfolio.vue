<template>
  <div>
    <PortfolioTile />
  </div>
</template>

<script>
// @ is an alias to /src
import PortfolioTile from "@/components/portfolio-tile";
//"{'background-image':}"
export default {
  name: "Home",
  components: {
    
    PortfolioTile
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
      }
    },
}
</script>
