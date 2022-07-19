<template>
  <WithNav>
    <div
      class="cow d-flex justify-content-around align-items-center align-items-lg-center
        mt-5 mt-lg-0">
      <div
        class="
          d-flex
          justify-content-around
          align-items-center
          flex-column flex-lg-row
        "
      >
        <div
          id="img"
          :style="{ 'background-image': 'url(assets/vertical-swoop.png)' }"
          class="cow small d-flex justify-content-center align-items-center"
        >
          <img
            class="image rounded-circle"
            src="assets/val.jpeg"
            alt="A blonde girl standing in front of a colorful wall"
          />
        </div>
        <img
          id="mobile"
          class="image rounded-circle mt-5"
          src="assets/val.jpeg"
          alt="A blonde girl standing in front of a colorful wall"
        />

        <div id="text-box" class="large">
          <div id="text">
            <h1 class="pt-0">It's nice to meet you!</h1>
            <p>
              I'm Valerie Remaker and I graduated from The University of
              Washington pursuing a double degree in Human Centered Design and
              Engineering (HCDE) and Psychology. During my time at The University of Washington, I focused my studies 
              on a broad range of interests including UX Design, UX Research, and Software Development. 
              I have cultivated my UX skills to be a flexible and versatile team player who can readily 
              adapt to a variety of roles and can communicate effectively with all members of the product team.  
              </p>
            <p>
              I have been involved in a wide variety of undergraduate research projects in
              both Psychology and HCDE. Currently, I help conduct
              qualitative research which analyzed TikTok videos from the Texas
              Energy Crisis to understand the role of social media in crisis
              responses. In the department of psychology, I helped collect data
              for a Virtual Reality study which investigated participants'
              reaction to different levels of immersion into simulated natural
              environments.
            </p>
            <p>
              In my free-time I love to crochet and enjoy the natural world.
            </p>
          </div>
        </div>
      </div>
    </div>
  </WithNav>
</template>

<script>
import WithNav from "@/components/layouts/WithNav.vue";

export default {
  components: {
    WithNav,
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
