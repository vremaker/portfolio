<template>
<WithNav>
  <div id="home" class="d-flex" align-v="stretch">
    <div id="text">
      <h1>Hi There, I'm Valerie</h1> 
      <p>I'm a Human Centered Designer</p>
    </div>
   <img src="assets/sketch.png" alt="sketch of girl with pink hair in double buns" class="h-50 align-self-end"  /> 
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
  color: white;
  text-align:center;
}
</style>