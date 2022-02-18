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
    <div id="projects">
      <!--<h1 class="my-4"> Take a look at some of my favorite projects! </h1>
      <div 
        v-for="(tile, i) in tiles" 
        :key="tile.short-name" 
        class="portfolio-item d-flex justify-content-around align-items-center text-center" 
        :class="(i%2 == 0) ? 'flex-column flex-lg-row' : 'flex-column flex-lg-row-reverse '
        ">
        <img class="image" :src="'assets/tiles/' + tile.short + '.png'" :alt="tile.name + 'icon'" />
        <div class="text" 
        :class="(i%2 == 0) ? 'left' : 'right'"> 
          <h2>{{tile.name}}</h2>
          <p>{{tile.description}}</p>
          <div class="button"><p>View Project Details</p></div>
        </div>
      </div>-->
      <div v-for="(tile, i) in tiles" 
        :key="tile.short-name" >
        <img class="card-img-top image" :src="'assets/tiles/' + tile.short + '.png'" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
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
          name: "Crochet Buddy Prototyping",
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

<style scoped>
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

.portfolio-item {
  width: 90%;
  margin: auto;
  margin-top: 1%;
  margin-bottom: 1%;
  background-color: #fea5d9;
  color: black;
}

#landing h1 {
  font-size: 3em;
  font-family: "Playfair Display", serif;
  font-weight: 900;
}

p {
  font-size: 15pt;
  font-family: "Raleway", sans-serif;
}

.icon {
  width: 35px;
  height: 35px;
  margin-left: 10px;
  margin-right: 10px;
}

.image {
  width: 25%;
  height: auto;
}

.text {
  width: 50%;
}

.button {
  background-color: #d24584;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
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