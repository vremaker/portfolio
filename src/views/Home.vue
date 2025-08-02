<template>
  <WithNav>
  
    <div id="landing">
<section class="hero-wrap js-fullheight" id="">

		<div class="image-container container-fluid px-0">
			<div class="">
				<img class="" src="@/assets/test2.png"
					alt="">
				<div class="overlay-text">
					<div class="text mt-5">
						<span class="subheading">Human Centered Designer</span>
						<h1> Hi, I'm Valerie. </h1>
						<p>I am a UX Designer based in Duvall, Washington with experience in UX research, UX design,
							and software development. </p>
					</div>
				</div>
			</div>
		</div>
	</section>
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
    PortfolioTile,
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

