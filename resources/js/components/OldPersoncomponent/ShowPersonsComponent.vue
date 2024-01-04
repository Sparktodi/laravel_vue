<template>
    <tr :class="this.$parent.isPerson(person.id) ? 'd-none' : ' '">
        <th scope="row">{{ person.id }}</th>
        <td>{{ person.name }}</td>
        <td>{{ person.age }}</td>
        <td>{{ person.job }}</td>
        <td><a href="#" @click.prevent="changeEditPerson(person.id, person.name, person.age, person.job)"
                class="btn btn-success">Edit</a></td>
    </tr>
</template>
<script>
export default {
    name: "ShowPersonsComponent",

   
    props: [
        'person'
    ],


    methods: {
        changeEditPerson(id, name, age, job) {
            this.$parent.editPersonId = id
            let editName = `edit_${id}`
            let fullName = this.$parent.$refs[editName][0]
            fullName.name = name
            fullName.age = age
            fullName.job = job
        }
    }
}
</script>
