import Vue from 'vue';
import router from './router';
import Index from './components/Index.vue'
import PostComponent from './components/PostComponent.vue'
import store from './store'

require('./bootstrap');


const App = new Vue({
    el: "#app",
    components: {
        // PostComponent
        Index
    },

    router,
    store
})