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
      <div id="connect" class="d-flex justify-content-center flex-row-wrap">
        <a href="" target="_blank"><img class="icon" src="assets/email.svg" alt="email me"/></a>
        <a href="" target="_blank"><img class="icon" src="assets/call.svg" alt="my linkedin"/></a>
        <a href="" target="_blank"><img class="icon" src="assets/linked.svg" alt="my linkedin"/></a>
        <a href="" target="_blank"><img class="icon" src="assets/insta.svg" alt="my linkedin"/></a>
        <a href="" target="_blank"><img class="icon" src="assets/github.svg" alt="my linkedin"/></a>
      </div>
      </div>
      
    </div>
    </div>
<<<<<<< HEAD
    <div id="projects" class="my-5">
      <div class="portfolio-piece d-flex flex-column flex-lg-row  align-items-center justify-content-center">
        <img class="image" src="assets/tiles/on-trak.png" alt="fuck" /> 
=======
    <div id="projects">
      <div class="portfolio-piece">
        <img class="image" src="assets/tiles/zoom-u.jpg" /> 
>>>>>>> parent of f40a0d14 (idk)
        <div>
          <h1>OnTrak</h1> 
          <p></p>
        </div>
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

#projects {
  width: 90%;
  background-color: red;
  margin: auto;
}

.icon {
  width: 35px;
  height: 35px;
  margin-left: 10px;
  margin-right:10px;
}

.image {
  width: 20%;
  height: auto;
}
</style>