<template>
 <WithNav>
   <div class="cow d-flex justify-content-around align-items-center">
     <div class="d-flex justify-content-around align-items-center">
     <div id="img" :style="{'background-image': 'url(assets/vertical-swoop.png)'}" class="cow small d-flex  justify-content-center align-items-center" :class="(Width > 960)? show : hide ">
      <img class="image" src="assets/val.png" alt="pink haired girl in front of a big rock" />
     </div>
     <img class="image" :class="(windowWidth > 960)? hide : show " src="assets/val.png" alt="pink haired girl in front of a big rock" />
     <div class="large">
       <div id="text">
       <h1>It's nice to meet you!</H1>
       <p>
         My name is Valerie Remaker and I am a Senior at The University of Washington pursuing a double 
         major in Human Centered Design & Engineering (HCDE) and Psychology. I intend to use these 
         degrees to go into the field of User Experience Design. My goal is to create clean, fun, and 
         intuitive designs through the implementation of both human centered design and psychological
         principles. I also hope to implement positive psychology in my designs to make the experience 
         online healthier and less addictive. 
         <br /><br />
        During my time at The University of Washington, I have been involved in a wide variety of undergraduate research projects in 
        both Psychology and HCDE. In the department of HCDE, I helped run user centered design charrettes for K-12 students to 
        introduce them to the human centered design process; and assisted in qualitative analysis of the impact that these charrettes 
        have on the college students that facilitate them. I also participated in qualitative research which analyzed TikTok videos 
        from the Texas Energy Crisis to understand the role of social media in crisis responses. In the department of psychology, I 
        helped collect data for a Virtual Reality study which investigated participants' reaction to different levels of immersion 
        into simulated natural environments. 
        <br /><br />
        I also work as an Engineering Ambassador for the College of Engineering to help prospective students get excited about our 
        engineering program. When I am not studying, I love to crochet, 
        swing dance, and enjoy the natural world. 
</p>
</div>
       </div> 
     </div>
     </div>
 </WithNav>
</template>

<script>
import WithNav from '@/components/layouts/WithNav.vue'

export default{
  components: {
    WithNav,
  },
  data() {
    return {
 
    } 
  },

}
</script>

<style lang="scss" scoped>
  .cow {
    height: 100vh;
  }

  .small {
    width: 50%;
 
  }

  .large {
    width: 50%;
  }

  #text {
    width: 80%;
  }
  
  .image {
    width: 60%;
    height:auto;
  }

  #img {
    background-repeat: no-repeat;
    background-size:cover;
    background-position: center;
  }

  h1 {
    font-family: 'Playfair Display', serif;
    font-size: 2.5em;
    font-weight: 800;
  }

  p {
    font-family: "Raleway", san-serif;
    font-size: 1em;
  }

  .show {
    display: block;
  }

  .hide {
    display:none;
  }
</style>