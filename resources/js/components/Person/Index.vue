<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Job</th>
                    <th scope="col">Show</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="person in persons">
                    <th scope="row">{{ person.id }}</th>
                    <td>{{ person.name }}</td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.job }}</td>
                    <td>
                        <router-link :to="{ name: 'persons.show', params: { id: person.id } }">Show</router-link>
                    </td>
                    <td>
                        <router-link :to="{ name: 'persons.edit', params: { id: person.id } }">Edit</router-link>
                    </td>
                    <td><a href="#" @click.prevent="$store.dispatch('isDelete', person.id)" class="btn btn-danger">Delete</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>

export default {

    name: "Index",

    mounted() {
        this.$store.dispatch('getPersons')
    },


    computed: {
        persons() {
            return this.$store.getters.persons
        }
    }

}
</script>