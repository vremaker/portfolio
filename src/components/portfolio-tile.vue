<template>
  <div id="portfolio" ref="port">
    <h2>My Projects!</h2>
    <div id="projects" class="d-flex flex-wrap justify-content-center">
      <div v-for="tile in tiles" :key="tile.name" class="card col-5 gap-3">
        <router-link :to="'/' + tile.short" @click="scrollToTop" class="button">
          <div class="card-body d-flex justify-content-center align-items-center h-100">
            <img
              class="card-img-top image h-100"
              :src="'assets/tiles/' + tile.short + '.png'"
              alt="Card image cap"
            />
            <div class="card-body">
              <h2 class="card-title">{{ tile.name }}</h2>
              <p class="card-text">
                {{ tile.description }}
              </p>
            </div>
          </div>
        </router-link>
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
  prop: ["name"],
  components: {
    WithNav,
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  data() {
    return {
      image: { backgroundImage: "url(assets/swoop.png)" },
      tiles: [
        {
          short: "rules-optimizer",
          name: "Optimal Blue Rules Optimizer",
          description: "Professional UX Case Study",
        },
        {
          short: "fin-lit",
          name: "Chime Financial Literacy",
          description: "UX Case Study",
        },
        {
          short: "on-trak",
          name: "OnTrak Troubleshooting",
          description: "UX Case Study",
        },
        {
          short: "bursting-pipes",
          name: "Bursting Pipes and Boiling Snow",
          description: "Peer-Reviewed Publication",
        },

        /*
        {
          short: "transit",
          name: "Emerald City Transit Redesign",
          description:
            "Inspired by the musical Wicked, this brand redesign seeks to add whimsy and fun to an otherwise boring commute.",
        },*/
        // {
        //   short: "common-ground",
        //   name: "Common Ground",
        //   description:
        //     "Common Ground focuses on uniting people online in a climate of political division and isolation. This project was given an honorable mention at the Democracy Design Jam.",
        // },
        // {
        //   short: "crochet-buddy",
        //   name: "Crochet Buddy",
        //   description:
        //     "An exploration in prototyping for Crochet Buddy: an Internet of Things (IoT) device created to assist novice crochet hobbyists in the pursuit of beautiful yarn-craft.",
        // },
        // {
        //   short: "nature",
        //   name: "Access to Nature and Crime",
        //   description:
        //     "A quantitative investigation into the potential impacts that having access to nature would have on crime rates across the various neighborhoods within Seattle, Washington.",
        // },
        /*{
          short: "night-owl",
          name: "Night Owl",
          description:
            "An app designed to keep UW students safe while walking around at night.",
        },*/
        // {
        //   short: "zoom-u",
        //   name: "The Virtual College Experience",
        //   description:
        //     "A qualitative research study which sought to answer the question: how do college students get motivated and maintain productivity while learning from home?",
        // },
      ],
    };
  },
};
</script>





