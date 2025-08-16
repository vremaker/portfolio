import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // remove if not using Vuex

 import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import * as bootstrap from 'bootstrap'; // Import Bootstrap JavaScript bundle


import './styles/main.scss'; // your global styles

const app = createApp(App);

app.use(router); // Vue Router 4
app.use(store);  // Vuex 4 (optional)

app.mount('#app');



// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
// import '@/styles/main.scss';
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// // Import Bootstrap an BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// // Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)

// Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
 
//   render: h => h(App)
// }).$mount('#app')
