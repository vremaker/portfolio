<template>
  <PortfolioPiece>
  <ProjectHeader></ProjectHeader>

    
    <div>

    </div>

  </PortfolioPiece>
</template>

<script>
import PortfolioPiece from "@/components/layouts/PortfolioPiece.vue";
import ContentSection from "@/components/layouts/ContentSection.vue";
import FancyList from "../../components/layouts/FancyList.vue";
import ProjectHeader from "../../components/layouts/ProjectHeader.vue";

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
  components: {
    PortfolioPiece,
    ContentSection,
    FancyList,
    ProjectHeader
    
  },
  props: {
    item: Array
  },

  methods: {
	 scrollToTop() {
      window.scrollTo(0, 0);
    },
    handleScroll() {
      this.isSticky = window.scrollY > 700; 
    }
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
background-color: red !important;
position: sticky;
  top: 100;
  margin-top: 100px ;
}
</style>