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

<style scoped>

</style>