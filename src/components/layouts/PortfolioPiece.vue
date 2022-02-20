<template>
    <div id="oof">
        <Nav class="mb-5"/>
        <div id="feet-pix">
        <slot></slot>
        
        </div>
    </div>
</template>

<script> 
    import Nav from '@/components/nav-bar.vue'
    export default {
        components: {
            Nav,
        }
    }
</script> 

<style lang="scss" scoped>
  
    #oof {
        width: 65%;
        margin:auto;

        h1, h2 {
            text-align:center;
          
        }
        h1 {
            font-size: 20pt;
        }
        h2 {
              font-size: 14pt;
        }

        h3 {
            font-size: 16pt;
        }
        img {
            text-align: center;
        }
    }
</style>