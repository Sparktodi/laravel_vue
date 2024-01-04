<template>
    <div class="w-50 mt-4">
        Create person
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
            <input :disabled="!isDisabled" @click.prevent="$store.dispatch('storePerson', {name: name, age: age, job: job})" type="submit" class="btn btn-primary" value="Добавить">
        </div>
    </div>
</template>
<script>

export default {
    name: "Create",
    data() {
        return {
            name: null,
            age: null,
            job: null
        }

    },


    computed: {
        isDisabled() {
            return this.name && this.age && this.job
        }
    }

}
</script>