<template>
  <PortfolioPiece>
    <div>
     <div class="cow">
        <img class="sm-img" src="/assets/tiles/common-ground.png" alt="DCI" />
      </div>
    <h1>Common Ground</h1>
    <h2>People Over Politics</h2>

    <p>
      For the 2020 HCDE Democracy Design Jam, a 24 hour virtual design
      sprint, my team wondered: In a country divided by
      politics and physical isolation, how can people connect and find common
      ground with each other?  My team created a mobile app called Common Ground which was designed to combat the social divisions that were weaponized in the 2016
      election It humanizes the “opposing side” by focusing on what people have
      in common, rather than their differences in political views. 
      <br />
      <em> This project was given an honorable mention during final deliberation. </em>
  
    
    </p>
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