<template>
    <div>
        <Nav class=""/>
        <div class="article">
            <div class="text">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script> 
    import Nav from '@/components/nav-bar.vue'
    export default {
       
        components: {
            Nav,
        },
        methods: { 
            scrollToTop() {
                window.scrollTo(0,0);
            }
        },
        created() {
            this.scrollToTop();
        }
    }
</script> 
