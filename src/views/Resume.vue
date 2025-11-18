<template>
  <div>
   <Nav />  
    
  </div>
</template>

<script>
import Nav from "@/components/nav-bar";

export default {
  components: {
    Nav
  },
  data() {
    return {
      width: window.innerWidth,
    };
  },
 
  methods: {
  
  },
};
</script>
<style scoped>

.hidden {
  display: none !important;
}
</style>
