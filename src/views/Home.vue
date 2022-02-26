<template>
  <WithNav>
    <div
      id="landing"
      :style="image"
      class="d-flex align-items-center justify-content-center"
    >
      <div
        class="
          p-3
          text-center
          w-75
          d-flex
          justify-content-center
          align-items-center
        "
        id="landing-info"
      >
        <div class="p-3">
          <h1>
            Hi There, <br />
            I'm Valerie Remaker
          </h1>
          <p>
            I'm a senior studying Human Computer Interaction and Psychology at
            The University of Washington. I am passionate about creating fun,
            engaging, and interactive experiences for users.
          </p>
          <div id="connect" class="d-flex justify-content-center flex-row-wrap">
            <a href="mailto:vremaker@gmail.com" target="_blank">
              <img
                class="icon"
                src="assets/email.svg"
                alt="Email Valerie Remaker"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/valerie-remaker/"
              target="_blank"
            >
              <img
                class="icon"
                src="assets/linked.svg"
                alt="Valerie Remaker's Linkedin"
            /></a>
            <a href="https://www.instagram.com/valer_tree/" target="_blank"
              ><img
                class="icon"
                src="assets/insta.svg"
                alt="Valerie Remaker's Instagram"
            /></a>
            <a href="https://github.com/vremaker" target="_blank">
              <img
                class="icon"
                src="assets/github.svg"
                alt="Valerie Remaker's Github"
            /></a>
          </div>
        </div>
      </div>
    </div>

    <PortfolioTile />
  </WithNav>
</template>

<script>
// @ is an alias to /src
import PortfolioTile from "@/components/portfolio-tile";
import WithNav from "@/components/layouts/WithNav";
//"{'background-image':}"
export default {
  name: "Home",
  components: {
    WithNav,
    PortfolioTile
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {},
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  data() {
    return {
      image: { backgroundImage: "url(assets/swoop.png)" },
      tiles: [
        {
          short: "on-trak",
          name: "OnTrak Troubleshooting",
          description:
            "A simple, fun, and easy to use troubleshooting application designed to empower product users resolve common hardware issues without calling customer service for help.",
        } /*
        {
          short: "crochet-buddy",
          name: "Prototyping Crochet Buddy",
          description:
            "Crochet Buddy is an Internet of Things (IoT) device created to assist novice crochet hobbyists in their pursuit of beautiful yarn-craft.",
        },*/,
        {
          short: "transit",
          name: "Emerald City Transit Redesign",
          description:
            "Inspired by the song One Short Day, from Wicked: The Musical & Seattle's Emerald City nickname, this brand redesign seeks to add whimsy and fun to an otherwise boring commute.",
        },
        {
          short: "common-ground",
          name: "Common Ground",
          description:
            "Common Ground focuses on uniting people rather than dividing them during a very this politically charged era of society. Finalist in the HCDE Democracy Design Jam.",
        },
        {
          short: "night-owl",
          name: "Night Owl",
          description:
            "An app designed to keep UW students safe while walking around at night.",
        },
        {
          short: "zoom-u",
          name: "The Virtual College Experience",
          description:
            "A qualitative research study which sought to answer the question: how do college students motivate and maintain productivity while learning from home?",
        },
      ],
    };
  },
};
</script>
