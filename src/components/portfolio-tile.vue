<template>
  <div id="portfolio" ref="port">
    <h2>My Projects!</h2>
    <div id="projects" class="d-flex flex-wrap justify-content-center">
      <div v-for="tile in tiles" :key="tile.name" class="card">
        <img
          class="card-img-top image"
          :src="'assets/tiles/' + tile.short + '.png'"
          alt="Card image cap"
        />
        <div class="card-body">
          <h2 class="card-title">{{ tile.name }}</h2>
          <p class="card-text">
            {{ tile.description }}
          </p>
          <router-link
            :to="'/' + tile.short"
            @click="scrollToTop"
            class="button"
            >View Project Details</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import WithNav from "@/components/layouts/WithNav";
//"{'background-image':}"
export default {
  name: "Home",
  prop:['name'],
  components: {
    WithNav,
  },
  methods:     {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  data() {
    return {
      image: { backgroundImage: "url(assets/swoop.png)" },
      tiles: [
        {
          short: "fin-lit",
          name: "Chime Financial Literacy",
          description: "Empowering users to gain financial literacy skills that are applicable to their lives using their real financial data. Won an honorable mention for DEI during the UW HCDE Capstone Showcase",
        }, 
        {
          short: "on-trak",
          name: "OnTrak Troubleshooting",
          description:
            "A simple, fun, and easy-to-use troubleshooting application designed to empower product users to resolve common hardware issues without calling customer service for help.",
        }, 
      /*
        {
          short: "transit",
          name: "Emerald City Transit Redesign",
          description:
            "Inspired by the musical Wicked, this brand redesign seeks to add whimsy and fun to an otherwise boring commute.",
        },*/
        {
          short: "common-ground",
          name: "Common Ground",
          description:
            "Common Ground focuses on uniting people rather than dividing them during a very this politically charged era of society. Finalist in the HCDE Democracy Design Jam.",
        },
        {
          short: "crochet-buddy",
          name: "Crochet Buddy",
          description:
            "Exploratory prototyping for Crochet Buddy: an Internet of Things (IoT) device created to assist novice crochet hobbyists in the pursuit of beautiful yarn-craft.",
        },
        {
          short: "nature",
          name: "Access to Nature and Crime",
          description: "A quantitative investigation into the potential impacts that having access to nature would have on crime rates aross the various neighborhoods within Seattle, Washington."
        },
        /*{
          short: "night-owl",
          name: "Night Owl",
          description:
            "An app designed to keep UW students safe while walking around at night.",
        },*/
        {
          short: "zoom-u",
          name: "The Virtual College Experience",
          description:
            "A qualitative research study which sought to answer the question: how do college students get motivate and maintain productivity while learning from home?",
        },
      ],
    };
  },
};
</script>





