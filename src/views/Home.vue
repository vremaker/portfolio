<template>
<WithNav>
  <div class="home">
    <h1>Hi There, I'm Valerie</h1> 
    <p>I'm a Human Centered Designer</p>
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
  .home {
    height: 93vh;
    background-color: orange;
  }
</style>