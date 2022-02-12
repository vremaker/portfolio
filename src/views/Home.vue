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
    <div id="projects" class="my-5">
      <div class="portfolio-piece d-flex flex-column flex-lg-row  align-items-center justify-content-center">
        <img class="image" src="assets/tiles/ontrak.png" alt="fuck" /> 
        <div>
          <h1>OnTrak</h1> 
          <p>This is the short little blurb about onTrak </p>
          <div class="button"><p>View Process</p></div>
          <p></p>
        </div>
        </div>
      <div class="portfolio-piece d-flex flex-column-reverse flex-lg-row flex-row align-items-center justify-content-center">
        <div>
          <h1>Emerald City Transit</h1> 
          <p></p>
          <div class="button"><p>View Process</p></div>
          <p></p>
        </div>
        <img class="image" src="assets/tiles/ect.png" alt="fuck" /> 
        </div>
        <div class="portfolio-piece d-flex flex-column flex-lg-row flex-row align-items-center justify-content-center">
        <img class="image" src="assets/tiles/crochet-buddy.png" alt="fuck" /> 
        <div>
          <h1>Crochet Buddy</h1> 
          <p>This is the short little blurb about onTrak </p>
          <div class="button"><p>View Process</p></div>
          <p></p>
        </div>
        </div>
          <div class="portfolio-piece flex-column-reverse flex-lg-row d-flex flex-row align-items-center justify-content-center">
        <div>
          <h1>The Virtual College Experience</h1> 
          <p></p>
          <div class="button"><p>View Process</p></div>
          <p></p>
        </div>
        <img class="image" src="assets/tiles/zoom-u.png" alt="fuck" /> 
        </div>
      
      <div class="portfolio-piece d-flex flex-column flex-lg-row flex-row align-items-center justify-content-center">
        <img class="image" src="assets/tiles/common-ground.png" alt="fuck" /> 
        <div>
          <h1>Common Ground</h1> 
          <p>This is the short little blurb about onTrak </p>
          <div class="button"><p>View Process</p></div>
          <p></p>
        </div>
        </div>
       <div class="portfolio-piece d-flex flex-column flex-lg-row flex-row align-items-center justify-content-center">
       
        <div>
          <h1>Common Ground</h1> 
          <p>This is the short little blurb about onTrak </p>
          <div class="button"><p>View Process</p></div>
          <p></p>
        </div>
         <img class="image" src="assets/tiles/night-owl.png" alt="fuck" /> 
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
      portfolio: [
        {
          "title": "OnTrak",
          "description": "A simple, fun, and easy to use troubleshooting application designed to empower users to resolve common hardware issues without calling customer service for help. ",
          "short-name": "on-trak"
        },
        {
          "title": "Emerald City Transit",
          "description": "A simple, fun, and easy to use troubleshooting application designed to empower users to resolve common hardware issues without calling customer service for help. ",
          "short-name": "ECT"
        },
             {
          "title": "The Virtual College Experience",
          "description": "A simple, fun, and easy to use troubleshooting application designed to empower users to resolve common hardware issues without calling customer service for help. ",
          "short-name": "zoom-u"
        },
        {
          "title": "OnTrak",
          "description": "A simple, fun, and easy to use troubleshooting application designed to empower users to resolve common hardware issues without calling customer service for help. ",
          "short-name": "on-trak"
        },
       {
          "title": "OnTrak",
          "description": "A simple, fun, and easy to use troubleshooting application designed to empower users to resolve common hardware issues without calling customer service for help. ",
          "short-name": "on-trak"
        },
        {
          "title": "OnTrak",
          "description": "A simple, fun, and easy to use troubleshooting application designed to empower users to resolve common hardware issues without calling customer service for help. ",
          "short-name": "on-trak"
        }
      ]
    };
  }
}
</script>

<style lnag="scss" scoped>
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
  margin:auto;
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


@media (max-width: 992px) {
  .image { 
    width: 60%;
    margin: auto;
  }
 }
</style>