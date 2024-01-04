<template>
    <tr :class="this.$parent.isPerson(person.id) ? '' : 'd-none'">
        <th scope="row">{{ person.id }}</th>
        <td><input type="text" v-model="name" class="form-control"></td>
        <td><input type="number" v-model="age" class="form-control"></td>
        <td><input type="text" v-model="job" class="form-control"></td>
        <td><a href="#" @click.prevent="updatePerson(person.id)" class="btn btn-success">Update</a></td>
        <td><a href="#" @click.prevent="isDelete(person.id)" class="btn btn-danger">Delete</a></td>
    </tr>
</template>
<script>
export default {
    name: "EditPersonsComponent",
    components: {

    },

    data() {
        return {
            name: null,
            age: null,
            job: null,
        }
    },

    props: [
        'person'
    ],

    methods: {
        updatePerson(id) {
            this.$parent.editPersonId = null
            axios.patch('/api/persons/' + id, { name: this.name, age: this.age, job: this.job })
                .then(response => {
                    this.$parent.getPersons()
                })
        },

        isDelete(id) {
            axios.delete('/api/persons/' + id)
                .then(response => {
                    this.$parent.getPersons()
                })
        }
    }
}
</script>
