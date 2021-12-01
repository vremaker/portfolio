<template>
    <div id="oof">
        <Nav class="mb-5"/>
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