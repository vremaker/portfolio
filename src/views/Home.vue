<template>
<WithNav>
  <div  id="landing" :style="image" class="d-flex align-items-center justify-content-center" >
    <div class="p-3 text-center w-75 d-flex justify-content-center align-items-center"  id="woo">
      <div class="p-3">
        <h1>Hi There, <br />  I'm Valerie Remaker</h1> 
      <p> 
        I'm a senior studying Human Computer Interaction and Psychology at The University of Washington. I am passionate about creating fun, engaging, and 
        interactive experiences for users.  
      </p>
      <div id="connect" class=""> 
        <img src="assets/Ll-ln-Bug.png"/>
      </div>
      </div>
      
    </div>
    </div>
    <div id="projects">
      <div class="portfolio-piece">
          <h1>OnTrak</h1> 
        </div>
        <div class="portfolio-piece">
          <h1>OnTrak</h1> 
        </div>

    </div>
  </WithNav>
</template>

<script>
// @ is an alias to /src
import WithNav from '@/components/layouts/WithNav'
//"{'background-image':}"
export default {
  name: 'Home',
  components: {
    WithNav,
  },
  data() {
    return {
      image: {backgroundImage: 'url(assets/swoop.png)'},
    };
  }
}
</script>

<style scoped>
#landing {
    height: 100vh;
    background-color: #d24584;
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;
}
logo {
  color: black;
}
#woo {
  background-color: white;
  border-radius: 5px;
}
#text {
  color: white !important;
  text-align:center;
}

a.nav-link {
  color:white !important;
}

h1 {
  font-size: 3em;
  font-family: 'Playfair Display', serif;
  font-weight: 900;
}

p {
  font-size: 15pt;
  font-family: 'Raleway', sans-serif;
}
</style>