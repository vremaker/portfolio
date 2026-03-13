<template>

  <b-row align-h="center">
    <b-col cols="10">
      <div>
        <!-- <h2>My Projects</h2> -->
        <div id="projects" class=""> <!-- wrapper -->
          <div class="box"> <!--box-->
            <div v-for="tile in tiles" :key="tile.name" class="card">

              <router-link :to="'/' + tile.short" @click="scrollToTop" class="button">
                <div>
                  <div class="d-flex justify-content-center" :style="{ backgroundColor: tile.cardColor }">
                    <img class=" " :src="'assets/tiles/' + tile.short + '.png'" alt="Card image cap" />
                  </div>
                </div>
                <h2 class="portfolio-tile-badge w-90 d-flex justify-content-end">
                <BBadge pill="true"  bg-variant="red" :style="{backgroundColor: tile.chipBackground, fontWeight: 400, color: tile.chipColor }">{{tile.company }}</BBadge>
                </h2>
            <div class="card-body">
              <h3 class="card-title">{{ tile.name }}</h3>
              <p class="card-text fw-bold">
                {{ tile.description }}
              </p>
            </div>
      
          </router-link>

        </div>
      </div>
      </div>
      </div>
    </b-col>
  </b-row>
  <img src="../assets/line.png" class="w-50 my-5 hi" />
</template>
<script>
// @ is an alias to /src

//"{'background-image':}"
export default {
  name: "Home",
  prop: ["name"],
  components: {
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
          short: "rules",
          name: "Optimal Blue Rules Optimizer",
          description: "Enterprise Software",
          company: "Optimal Blue",
          chipBackground: "#1979cc !important",
          chipColor: "#ffffff",
          cardColor: "#C6DEF2"

        },
        {
          short: "fin-lit",
          name: "Chime Financial Literacy",
          description: "UX Case Study",
          company: "Chime",
          chipBackground: "#2de38e !important",
          chipColor: "#505050",
          cardColor: "#C4EAD8"

        },        
        //  {
        //   short: "boiling-snow",
        //   name: "Bursting Pipes and Boiling Snow: Disaster Impacts and Adaptations in the 2021 Texas Power Crisis",
        //   description: "Academic Research Publication",
        //   company: "Center for an Informed Public",
        //   chipBackground: "#271b30 !important",
        //   chipColor: "#ffffff",
        //   cardColor: "#E0D8E4"
        // },       {
        //   short: "design-system",
        //   name: "Setting up for Consistency: Building UX Maturity through the implementation of a Design System.",
        //   description: "UX Case Study",
        //   company: "Optimal Blue",
        //   chipBackground: "#1979cc !important",
        //   chipColor: "#ffffff",
        //   cardColor: "#C6DEF2"
        // },


      ],
    };
  },
};
</script>
