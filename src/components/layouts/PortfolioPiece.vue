<template>
    <div>
        <Nav :color="primaryColor" :textColor="accentColor"/>
        <section id="header" :style="{backgroundColor: primaryColor}">
            <b-row align-h="center" :style="{color: accentColor}">
                <b-col cols="8">
                    <h1>{{title}}</h1>
                    <p class="subhead">{{subtitle}}</p>
                    <hr />

                    <b-row align-h="start">
                        <b-col cols="4">
                            <p class="fw-bold">Role</p>
                            <p>{{role}}</p>
                            <p>{{ timeline }})</p>
                        </b-col>
                        <b-col cols="4">
                            <p class="fw-bold">Tools</p>
                            <p>{{tools}}</p>
                        </b-col>
                        <b-col cols="4">
                            <p class="fw-bold">Team</p>
                            <p>{{ team }}</p>
                        </b-col>
                    </b-row>

                </b-col>
            </b-row>
        </section>
        <div class="custom-shape-divider-top-1761616648 mb-5" :style="{fill: primaryColor}">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                preserveAspectRatio="none">
                <path
                    d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                    class="shape-fill"></path>
            </svg>
        </div>
        <slot></slot>
    </div>
</template>
<script>
import carousel from "../../components/layouts/carousel.vue";
import Nav from '@/components/nav-bar.vue';
export default {
   props: {
        title: String,
        subtitle: String,
        role: String,
        timeline: String,
        tools: String,
        team: String,
        color: String,
        accentColor: String
        
    },
    components: {
        carousel,
        Nav
    },
 
    data() {
        return {
            full: false,
            primaryColor: this.color
        }
    },
    methods: {
    }
};

</script>
<style scoped style="scss">
#header {

    padding-top: 10rem;
    padding-bottom: 5rem;

}

#story section {
    margin-bottom: 8px;
}

#header p:not(.subhead) {
    margin-bottom: .05rem;
    font-size: 1rem;
    font-weight: 400;
}

img {
    width: 50%;
    height: auto;

}

img .fullImg {
    width: 100%;
}

#story {
    padding-top: 3rem;
}

.custom-shape-divider-top-1761616648 {
    bottom: -5;

    width: 100%;

    transform: rotate(180deg);
}

.custom-shape-divider-top-1761616648 svg {
    position: relative;
    display: block;
    width: calc(149% + 1.3px);
    height: 100px;
    transform: rotateY(180deg);
}



.accent {
    font-size: 2.5rem !important;
    color: var(--dark-chime);
}

em {
    font-weight: 500;
    font-style: normal;
}
</style>