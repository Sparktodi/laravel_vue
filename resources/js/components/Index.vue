<template>
    <div>
      
      <router-view></router-view>
      <router-link :to="{name: 'persons.index'}">People</router-link>
      <router-link :to="{name: 'persons.create'}">Create People</router-link>
      <!-- <router-link :to="{name: 'persons.show'}">Show People</router-link> -->
    </div>
</template>
<script>
export default {
    name: "Index",
    components: {
       
    },

    mounted() {

    },

    computed: {
     
    },
    methods: {

    }
}
</script>
