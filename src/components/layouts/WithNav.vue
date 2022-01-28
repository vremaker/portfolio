<template>
    <div id="oof">
        <Nav class=""/>
        <slot></slot>
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