<template>
  <PortfolioPiece>
    <div>
      <img class="sm-img" src="assets/tiles/transit.png" alt="transit screens" />
      <h1></h1>
      <p class="subhead">
        
        </p>
        <h2></h2>
    </div>
</PortfolioPiece>
</template>

<script>
import PortfolioPiece from "@/components/layouts/PortfolioPiece.vue";

export default {
  components: {
    PortfolioPiece,
  },
};
</script>
<style scoped>
.cow {
  width: 100%;
  display: flex;
  justify-content: center;
}
.sm-img {
  width: 30%;
  padding-top: 5%;
  padding-bottom: 2%;
  margin: auto;
}

img {
  width: 100%;
}

em {
  font-weight: 900;
}

#dci {
  padding-bottom: 5%;
}
</style>