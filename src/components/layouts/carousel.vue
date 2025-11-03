<template>
  <div class="container mt-4">
    <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../../assets/logo.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../../assets/logo.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../../assets/logo.png" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
</template>

<script>
import { BCarousel, BCarouselSlide } from 'bootstrap-vue-3'

export default {
  name: 'App',
  components: {
    BCarousel,
    BCarouselSlide
  },
  data() {
    return {
      slide: 0 // tracks current slide
    }
  }
}
</script>

<style>
/* Optional: center carousel and add spacing */
.container {
  max-width: 1024px;
}
</style>
