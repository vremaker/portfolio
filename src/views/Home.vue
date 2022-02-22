<template>
  <WithNav>
    <div id="landing"
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

    <!--PROJECTS --> 
    <div id="portfolio" ref="port">
      <h2>My Projects!</h2>
    <div id="projects" class="d-flex flex-wrap justify-content-center">
      <div v-for="(tile) in tiles" 
        :key="tile.short-name"
        class="card">
        <img class="card-img-top image" :src="'assets/tiles/' + tile.short + '.png'" alt="Card image cap" />
        <div class="card-body">
          <h2 class="card-title">{{tile.name}}</h2>
          <p class="card-text">
           {{tile.description}}
          </p>
          <router-link :to="'/'+ tile.short" @click="scrollToTop" class="button">View Project Details</router-link>
        </div>
      </div>
      </div>
    </div>
  </WithNav>
</template>

<script>
// @ is an alias to /src
import WithNav from "@/components/layouts/WithNav";
//"{'background-image':}"
export default {
  name: "Home",
  components: {
    WithNav,
  },
  created () {
    window.scrollTo(0,0);

  },
  methods: { 
            scrollToTop() {
                window.scrollTo(0,0);
            }
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
        },
        {
          short: "crochet-buddy",
          name: "Prototyping Crochet Buddy",
          description:
            "Crochet Buddy is an Internet of Things (IoT) device created to assist novice crochet hobbyists in their pursuit of beautiful yarn-craft.",
        },
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
            "A qualitative research study consisting of two field observations and two interviews which sought to answer the question: how do college students motivate and maintain productivity while learning from home?",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#landing {
  height: 100vh;
  background-color: #d24584;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

#landing-info {
  background-color: white;
  border-radius: 5px;
}

#landing h1 {
  font-size: 3em;
  font-family: "Playfair Display", serif;
  font-weight: 900;
}

p {
  font-size: 12pt;
  font-family: "Raleway", sans-serif;
}

.card {
  width: 500px;
  text-align:center;
  border-width: 2px;
  border-color: #d24585;
  margin: 5px;

  img {
    width: 50%;
    padding-top: 1%;
    margin:auto;
  }
  
  .card-body {
    padding-top: 0;
  }

  h2.card-title {
    padding-top: 0 !important; 
  }
}

.icon {
  width: 35px;
  height: 35px;
  margin-left: 10px;
  margin-right: 10px;
}

#portfolio {
  width: 90%;
  min-height: 100vh;
  margin: auto;
  display:flex;
  flex-flow: column;
  justify-content: center;
  align-items:center;

  h2 {
    text-align: center;
    padding-top: 5%;
    padding-bottom: 1%;
    font-size: 2em;
    font-family: "Playfair Display", serif;

  }
}

.button {
  background-color: #d24584;
  color: #ffffff;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  
  cursor: pointer;
  display: inline-block;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button:hover,
.button:focus {
  background-color: #f082ac;
}
</style>