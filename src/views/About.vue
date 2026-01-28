<template>
  <Nav :color="primaryColor" />
  <div class="page-body">
    <section :style="{ backgroundColor: primaryColor }" id="About">
      <div
        class="d-flex flex-column flex-lg-row justify-content-lg-center h-100 px-0"
      >
        <!-- <div id="val-sketch" class=""> -->
        <img class="test-img" src="../assets/about/purple_cats.png" alt="" />
        <!-- </div> -->
        <div class="overlay-text">
          <div class="text">
            <h1>About Me</h1>

            <p>
              Hi! My name is Valerie. I am an avid crafter, thrill seeker,
              technical enthusiast, and human centered designer with a passion
              for building cohesive, scalable product experiences. I pride
              myself on being able to “speak every team’s language,” and to help
              fill any gaps that may arise. I focus on bridging gaps across
              disciplines through robust, thoughtful design systems.
            </p>
            <p>
              As a user experience designer, I create clean, consistent,
              data-driven interfaces that elevate usability and remove
              unnecessary visual noise. My approach blends strategic UX thinking
              with business objectives, user needs, and technical constraints to
              deliver solutions that are meaningful, effective, and truly
              implementable.
            </p>
            <p>
              When I’m not designing, you’ll find me spending time with my cats
              (Glinda and Gertrude), crafting with yarn, or exploring the
              mountains: hiking, motorcycling, biking, and skiing.
            </p>
            <!-- <span class="subheading">Human Centered Designer</span> -->
          </div>
        </div>
      </div>

    </section>
    

    <div
      class="custom-shape-divider-top-1761616648"
      :style="{ fill: primaryColor }"
    >
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
    <div class="grid grid-cols-4 gap-6 p-8">
      <div v-for="(image, index) in images" :key="index" class="overflow-hidden rounded-lg h-64 w-full">
        <ImageEnlarger :imageSrc="image.src" :imageAlt="image.alt" :caption="image.caption" />
      </div>
    </div>
</div>
</template>

<script>
import Nav from "@/components/nav-bar";
import ImageEnlarger from "../components/layouts/ImageEnlarger.vue";

export default {
  components: {
    Nav,
    ImageEnlarger
  },
  data() {
    return {
      width: window.innerWidth,
      primaryColor: "#F2B287",
      images:[
        { src: '/assets/about/hikers.JPEG', alt: 'Valerie and her fiance on a mountain', caption: 'My fiance and I love to climb up mountains' },
        { src: '/assets/about/rockers.JPEG', alt: 'Valerie and her friend in front of a rock on a backpacking trip', caption: 'My friend and I on a backpacking trip' },
        { src: '/assets/about/ski_couple.JPEG', alt: 'Valerie and her fiance in patterned ski suits', caption: 'My fiance and I skiing' },
        { src: '/assets/about/biker_babe2.JPEG', alt: 'Valerie and her motorcycle', caption: 'I enjoy motorcycling' },
        { src: '/assets/about/berry.JPEG', alt: 'Valerie picking wild blueberries', caption: 'Getting my grisly bear on, picking wild blueberries' },
        { src: '/assets/about/amigo.JPEG', alt: 'Valerie and Izusu Amigo', caption: 'My trusty Amigo fulfills my love for convertibles and the mountains' },
        { src: '/assets/about/biker_gang.JPEG', alt: 'Valerie and her friends on their motorcycles', caption: 'My friends and I love to go on long motorcycle journeys' },
        { src: '/assets/about/lighthouse_pals.JPEG', alt: 'Valerie and her friends in a lighthouse on', caption: 'My friends and I on a lighthouse tour' },
        { src: '/assets/about/hikers.JPEG', alt: 'Valerie and her fiance on a mountain', caption: 'My fiance and I love to climb up mountains' },

        // { src: require('../assets/about/amigo.png'), alt: 'Isuzu Amigo', caption: 'My trusty Amigo' },
        // { src: require('../assets/about/babys_first_skis.png'), alt: "Baby's first skis", caption: "Baby's first skis" },
        // { src: require('../assets/about/big_rock.png'), alt: 'Big rock', caption: 'Big rock adventure' },
        // { src: require('../assets/about/blue_shirt.png'), alt: 'Blue shirt', caption: 'Blue shirt days' },
        // { src: require('../assets/about/index_cycle.png'), alt: 'Index cycle', caption: 'Index cycling' },
        // { src: require('../assets/about/lighthouse.png'), alt: 'Lighthouse', caption: 'Lighthouse exploration' },
        // { src: require('../assets/about/motorcycle_gang.png'), alt: 'Motorcycle gang', caption: 'The motorcycle crew' },
        // { src: require('../assets/about/mountaintop.png'), alt: 'Mountaintop', caption: 'Mountain peaks' },
        // { src: require('../assets/about/ornage_cats.png'), alt: 'Orange cats', caption: 'Orange friends' },
        // { src: require('../assets/about/ski_bum.png'), alt: 'Ski bum', caption: 'Ski season vibes' },
        // { src: require('../assets/about/ski_fiance.png'), alt: 'Ski fiance', caption: 'Ski with my love' },
        // { src: require('../assets/about/tandem.png'), alt: 'Tandem', caption: 'Tandem adventures' }
      ]
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped>


.hidden {
  display: none !important;
}

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
