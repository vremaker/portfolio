<template>
  <PortfolioPiece :title="headerDetails.title" :color="headerDetails.primaryColor" :subtitle="headerDetails.subtitle" :role="headerDetails.role" :timeline="headerDetails.timeline" :tools="headerDetails.tools" :team="headerDetails.team" :accentColor="headerDetails.accentColor">
    <section id="story">
      <b-row align-h="center">
        <b-col cols="8">
          <section id="background">
              <h2>Background </h2>
            <P>

            </P>
            
          </section>
          <section id="background">
              <h2>Background </h2>
            <P>

            </P>
            
          </section>
          <a href="https://drive.google.com/file/d/1gk1Nh6oY3-aM4OjwdVU8pegN7JyELYES/view?usp=sharing" target="_blank">View the paper man</a>
        </b-col>
      </b-row>
    </section>
  </PortfolioPiece>
</template>
<script>
import PortfolioPiece from "@/components/layouts/PortfolioPiece.vue";
import carousel from "../../components/layouts/carousel.vue";
export default {
  components: {
    PortfolioPiece,
    carousel
  },
  data() {
    return {
      full: false,
      headerDetails: {
        title: "Bursting Pipes and Boiling Snow: Disaster Impact and Adaptations in the 2021 Texas Power Crisis from the Lens of Short-Form Social Media Videos",
        subtitle: "How do people adapt to crisis — and what does short-form video reveal?",
        role: "Research Assistant",
        timeline: "8 Months (2021",
        tools: "Google sheets, Google Drive, Slack, Zoom, Twitter",
        team : "8 Researchers at the University of Washington",
        primaryColor: "#6f526c",
        accentColor: '#ffffff'
    }
  }
  },  
  methods: {
  }
};

</script>
