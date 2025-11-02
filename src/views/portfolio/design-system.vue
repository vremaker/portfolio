<template>
  <PortfolioPiece :title="headerDetails.title" :color="headerDetails.primaryColor" :subtitle="headerDetails.subtitle" :role="headerDetails.role" :timeline="headerDetails.timeline" :tools="headerDetails.tools" :team="headerDetails.team" :accentColor="headerDetails.accentColor">
    <section id="story">
      <b-row align-h="center">
        <b-col cols="8">
          <section id="background">
            <h2>Background </h2>
          </section>
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
        title: "Building Wealth With Chime",
        subtitle: "Empowering users to set financial goals and build practical financial literacy skills using their own real-world financial data.",
        role: "UX Designer and Researcher",
        timeline: "12 Months (2021-2022)",
        tools: "Figma, G-Suite, Slack, Virtual Sticky Notes",
        team : "Valerie Remaker, Katia Meuleman, Aiza Ali, Brisa Jimenez",
        primaryColor: "#1979cc",
        accentColor: '#ffffff'
    }
  }
  },  
  methods: {
  }
};

</script>