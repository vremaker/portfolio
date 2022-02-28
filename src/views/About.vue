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
            class="image"
            src="assets/val.jpeg"
            alt="A blonde girl standing in front of a colorful wall"
          />
        </div>
        <img
          id="mobile"
          class="image mt-5"
          src="assets/val.png"
          alt="A blonde girl standing in front of a colorful wall"
        />

        <div id="text-box" class="large">
          <div id="text">
            <h1>It's nice to meet you!</h1>
            <p>
              My name is Valerie Remaker and I am a Senior at The University of
              Washington pursuing a double major in Human Centered Design &
              Engineering (HCDE) and Psychology. I intend to use these degrees
              to go into the field of User Experience Design. My goal is to
              create clean, fun, and intuitive designs through the
              implementation of both human centered design and psychological
              principles. 
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
              I also work as an Engineering Ambassador for the College of
              Engineering to help prospective students get excited about our
              engineering program. When I am not studying, I love to crochet,
              and enjoy the natural world.
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
