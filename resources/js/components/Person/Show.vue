<template>
    <div v-if="person">
        <div>
            Show Person
        </div>
        <div>
            Name: {{ person.name }}
        </div>
        <div>
            Age: {{ person.age }}
        </div>
        <div>
            Job: {{ person.job }}
        </div>
        <div>
            <router-link :to="{ name: 'persons.edit', params: { id: person.id } }">Edit</router-link>
        </div>
    </div>
</template>
<script>

export default {

    name: "Show",
   
    mounted() {
        this.$store.dispatch('getPerson', this.$route.params.id)
    },

    computed: {
        person() {
            return this.$store.getters.person
        }
    }
}
</script>