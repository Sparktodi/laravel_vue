<template>
    <div>
        <router-link :to="{name: 'persons.index'}">Persons</router-link>
        <router-view></router-view>
        <!-- <single-post-component></single-post-component> -->
        <!-- <create-person-component ref="create"></create-person-component>
        <index-persons-component ref="index"></index-persons-component> -->
    </div>
</template>
<script>
// import SinglePersonsComponent from './SinglePersonsComponent.vue'
// import CreatePersonComponent from './CreatePersonComponent.vue'
// import IndexPersonsComponent from './IndexPersonsComponent.vue'
export default {
    name: "PersonsComponent",
    components: {
        // SinglePersonsComponent,
        // CreatePersonComponent,
        // IndexPersonsComponent
    },

    mounted() {

    },

    computed: {
        // getPersonsAgeMoreTwentyFive() {
        //     return this.persons.filter(function(persons) {
        //         return persons.age >= 25
        //     })
        // }
    },
    methods: {

    }
}
</script>
