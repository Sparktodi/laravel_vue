<template>
    <div class="w-50 mt-4">
        <div class="mb-3">
            <input type="text" class="form-control" v-model="name" id="name" placeholder="name">
        </div>
        <div class="mb-3">
            <input type="integer" class="form-control" v-model="age" id="age" placeholder="age">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" v-model="job" id="job" placeholder="job">
        </div>
        <div>
            <input @click.prevent="addPerson" type="submit" class="btn btn-primary" value="Добавить">
        </div>
    </div>
</template>
<script>

export default {
    name: "CreatePersonComponent",

    data() {
        return {
            name: null,
            age: null,
            job: null,
        }

    },

    methods: {
        addPerson() {
            axios.post('/api/persons', {name: this.name, age: this.age, job: this.job})
            .then(response => {
                 this.$parent.$refs.index.getPersons()
            })
        }
    }

}
</script>
