<template>
    <div>
        <Nav class="mb-5"/>
        <div class="article">
            <slot></slot>
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
