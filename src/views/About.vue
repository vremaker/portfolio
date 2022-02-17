<template>
  <WithNav>
    <div
      class="
        cow
        d-flex
        justify-content-around
        align-items-start align-items-lg-center
        mt-5 mt-lg-0
      "
    >
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
            src="assets/val.png"
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
              principles. I also hope to implement positive psychology in my
              designs to make the experience online healthier and less
              addictive.
              <br /><br />
              During my time at The University of Washington, I have been
              involved in a wide variety of undergraduate research projects in
              both Psychology and HCDE. In the department of HCDE, I helped run
              user centered design charrettes for K-12 students to introduce
              them to the human centered design process; and assisted in
              qualitative analysis of the impact that these charrettes have on
              the college students that facilitate them. I also participated in
              qualitative research which analyzed TikTok videos from the Texas
              Energy Crisis to understand the role of social media in crisis
              responses. In the department of psychology, I helped collect data
              for a Virtual Reality study which investigated participants'
              reaction to different levels of immersion into simulated natural
              environments.
              <br /><br />
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

<style lang="scss" scoped>
.cow {
  height: 100vh;
}

.hidden {
  display: none !important;
}
.small {
  width: 50%;
}

.large {
  width: 50%;
}

#text {
  width: 70%;
  margin: auto;
  margin-top: 5%;
  margin-bottom: 5%;
}

.image {
  width: 60%;
  height: auto;
}

#img {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

h1 {
  font-family: "Playfair Display", serif;
  font-size: 2.5em;
  font-weight: 800;
}

p {
  font-family: "Raleway", san-serif;
  font-size: 1em;
}

.show {
  display: block;
}

.hide {
  display: none;
}
</style>