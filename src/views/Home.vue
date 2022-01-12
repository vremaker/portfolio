<template>
<WithNav>
  <div id="home" class="d-flex justify-content-around w-100" align-h="between">
    <img src="assets/sketch.png" alt="sketch of girl with pink hair in double buns" class="sketch align-self-end d-lg-block d-none"  /> 
    <div id="text" class="d-flex align-items-center" >
      <div class="w-100 p-5 mx-5"> <h1>Hi There, <br />  I'm Valerie Remaker </h1>
     <p>I'm a Human Centered Designer</p> </div>
    
    </div>
  </div> 
  <div> 
    <h1> YEET </h1>
    </div>
  </WithNav>
</template>

<script>
// @ is an alias to /src
import WithNav from '@/components/layouts/WithNav'

export default {
  name: 'Home',
  components: {
    WithNav,
  }
}
</script>

<style scoped>
#home {
  height: 100vh;
  background-color: #d24584;
}

#text {
  color: white !important;
  text-align:center;
}

a.nav-link {
  color:white !important;
}

h1 {
  font-size: 45pt;
  font-family: 'Playfair Display', serif;
  font-weight: 900;
}

p {
  font-size: 15pt;
  font-family: 'Raleway', sans-serif;
}
</style>