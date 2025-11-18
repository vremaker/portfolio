<template>
  <div id="cool">
    <Nav :color="primaryColor"  />
    <div class="page-body">
      <section :style="{ backgroundColor: primaryColor }" id="landing">
        <div class="d-flex flex-column flex-lg-row justify-content-lg-center h-100 px-0">
          <!-- <div id="val-sketch" class=""> -->
          <img class="test-img" src="../assets/gallery-frame.png" alt="">
          <!-- </div> -->
          <div class="overlay-text">
            <div class="text">

              <h1> Hiya! I'm Valerie <span id="cute">✨</span> </h1>

              <p>I’m a user experience designer based in the Seattle area. I’m passionate creating consistency using
                design systems and I love to use human centered design practices to solve complex problems. </p>
              <!-- <span class="subheading">Human Centered Designer</span> -->
            </div>
          </div>
        </div>
      </section>

      <div class="custom-shape-divider-top-1761616648 flip" :style="{ fill: primaryColor }" >
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"></path>
        </svg>
      </div>



      <div id="portfolio">
        <PortfolioTile />
      </div>
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
    Nav,
    PortfolioTile,
  },
  
  methods: {

    scrollToTop() {
      window.scrollTo(0, 0);
    },

  },
  data() {
    return {
      primaryColor: "#F7D2D6"

    };
  },
};
</script>

<style scoped>
.custom-shape-divider-top-1761616648 {
  bottom: -5;

  width: 100%;

  transform: rotate(180deg);
  margin-bottom: 10vh;
  
}

.custom-shape-divider-top-1761616648 svg {
  position: relative;
  display: block;
  width: calc(149% + 1.3px);
  height: 100px;
  transform: rotateY(180deg);
}


</style>