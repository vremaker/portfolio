<template>
  <div>
    <Nav :color="primaryColor" :textColor="red"/>
    <div class="page-body">
      <PortfolioTile />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PortfolioTile from "@/components/portfolio-tile";
import Nav from "@/components/nav-bar";
//"{'background-image':}"
export default {
  name: "Home",
  components: {
    
    PortfolioTile,
    Nav
  },
  data() {
    return {
      primaryColor: 'white'
    }
  },  
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
      }
    },
}
</script>
