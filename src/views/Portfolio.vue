<template>
  <WithNav>
    <PortfolioTile />
  </WithNav>
</template>

<script>
// @ is an alias to /src
import WithNav from "@/components/layouts/WithNav";
import PortfolioTile from "@/components/portfolio-tile";
//"{'background-image':}"
export default {
  name: "Home",
  components: {
    WithNav,
    PortfolioTile
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
      }
    },
}
</script>
