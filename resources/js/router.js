import Vue from 'vue';
import VueRouter from 'vue-router'
// import Index from './components/Index'
// import PostComponent from './components/PostComponent.vue';

Vue.use(VueRouter)
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/persons', component: () => import('./components/Person/Index.vue'), 
            name: 'persons.index'
        },
        {
            path: '/persons/:id/edit', component: () => import('./components/Person/Edit.vue'),
            name: 'persons.edit'
        },
        {
            path: '/persons/:id', component: () => import('./components/Person/Show.vue'),
            name: 'persons.show'
        },
        {
            path: '/persons/create', component: () => import('./components/Person/Create.vue'),
            name: 'persons.create'
        }
    ]
})