<template>
 <div>
    Job: {{ jobVano }}
    <button @click="seyHello">Hello</button>
    <button @click="seyHi">Hi</button>

 </div>   
</template>
<script>
export default {
    data() {
        return {
            name: 'vano',
            age: 23,
            boolean: true,
            array: [],
            lastname: 'lox'
        }
    },
    name: "SinglePersonsComponent",
    methods: {
        seyHello() {
            console.log('hello')
        },
        seyHi() {
            console.log('hi')
        }
    },
    computed: {
        jobVano() {
            return this.name + ' ' + 'работает в очке';
        }
    }
}
</script>
