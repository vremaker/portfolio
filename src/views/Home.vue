<template>
  <div id="cool">
    <Nav :color="primaryColor" :textColor="red"/>
<section :style="{backgroundColor: primaryColor}" id="landing">
 <div class="d-flex flex-column flex-lg-row justify-content-lg-around h-100 px-0">
			  <!-- <div id="val-sketch" class=""> -->
        <img  src="../assets/gallery-frame.png"
					alt="">
          <!-- </div> -->
				<div class="overlay-text">
					<div class="text">
					
						<h1> Hi, I'm Valerie <span id="cute">✨</span> </h1>
            	
						<p>I’m a user experience designer based in the Seattle area. I’m passionate creating consistency using design systems and I love to use human centered design practices to solve complex problems. </p>
              <span class="subheading">Human Centered Designer</span>
					</div>
				</div>
		</div>
	</section>


   
    <PortfolioTile />
  </div>
</template>

<script>
// @ is an alias to /src
import PortfolioTile from "@/components/portfolio-tile";
import Nav from "@/components/nav-bar";
//"{'background-image':}"
export default {
  name: "Home",
  components: {
    Nav,
    PortfolioTile,
  },

  methods: {
   
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    
  },
  data() {
    return {
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
      primaryColor: "#FAF0EE"
      
    };
  },
};
</script>

