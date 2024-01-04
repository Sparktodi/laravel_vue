<template>
    <div>
        <router-link :to="{name: 'persons.index'}">Persons</router-link>
        <router-view></router-view>
        sadasdasdasdasdasdasdasdasfdfdf
        <!-- <table class="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Job</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="person in persons">
                    <show-persons-component :person="person"></show-persons-component>
                    <edit-persons-component :person="person" :ref="`edit_${person.id}`"></edit-persons-component>
                </template>
            </tbody>
        </table> -->
    </div>
</template>
<script>
// import EditPersonsComponent from './EditPersonsComponent.vue'
// import ShowPersonsComponent from './ShowPersonsComponent.vue'
export default {
    name: "IndexPersonsComponent",
    // components: {
    //     // EditPersonsComponent,
    //     // ShowPersonsComponent
    // },

    // data() {
    //     return {
    //         persons: null,
    //         editPersonId: null,
    //         name: null,
    //         age: null,
    //         job: null,
    //     }
    // },
    // mounted() {
    //     this.getPersons()
    // },

    // methods: {
    //     getPersons() {
    //         axios.get('/api/persons')
    //             .then(response => {
    //                 this.persons = response.data
    //             })
    //     },

    //     isPerson(id) {
    //         return this.editPersonId === id
    //     },

    // }
}
</script>
