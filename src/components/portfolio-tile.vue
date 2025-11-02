<template>
  <div class="custom-shape-divider-top-1761616648 ">
      <svg 
      data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          class="shape-fill"></path>
      </svg>
    </div>



 <b-row align-h="center">
        <b-col cols="10">
  <div id="portfolio">
    <h2>Cool Things I've Built</h2>
    <div id="projects" class="" > <!-- wrapper -->
      <div class="box"> <!--box-->
      <div v-for="tile in tiles" :key="tile.name" class="card">

        <router-link :to="'/' + tile.short" @click="scrollToTop" class="button">
          <div>
            <div class="d-flex justify-content-center">
              <img class=" " :src="'assets/tiles/' + tile.short + '.png'" alt="Card image cap" />
            </div>
            <div class="card-body">
              <h3 class="card-title">{{ tile.name }}</h3>
              <p class="card-text">
                {{ tile.description }}
              </p>
            </div>
          </div>
        </router-link>

      </div>
      </div>
    </div>
  </div>
</b-col>
</b-row>
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
          short: "design-system",
          name: "A Unified PPE Experience",
          description: "Design System",
          company: "Optimal Blue"
        },
        {
          short: "fin-lit",
          name: "Chime Financial Literacy",
          description: "UX Case Study",
          company: "Chime"
        },
        {
          short: "rules",
          name: "Optimal Blue Rules Optimizer",
          description: "Enterprise Software",
          company: "Optimal Blue"
        },



        /*
                // {
        //   short: "on-trak",
        //   name: "OnTrak Troubleshooting",
        //   description: "UX Case Study",
        // },
        // {
        //   short: "bursting-pipes",
        //   name: "Bursting Pipes and Boiling Snow",
        //   description: "Peer-Reviewed Publication",
        // },
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
<style scoped>
.custom-shape-divider-top-1761616648 {
  bottom: -5;

  width: 100%;

  transform: rotate(180deg);
}

.custom-shape-divider-top-1761616648 svg {
  position: relative;
  display: block;
  width: calc(149% + 1.3px);
  height: 100px;
  transform: rotateY(180deg);
}

.custom-shape-divider-top-1761616648 .shape-fill {
  fill: var(--dusty-pink);
}


</style>