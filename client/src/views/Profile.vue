<template>
    <div class="Profile">
        <h1>Welcome, {{this.user.name}}</h1>
    </div>
</template>


<script>
    export default {
        name: 'Profile',
        data() {
            return {}
        },
        computed: {
            user() {
                return this.$store.state.user
            }
        },
        methods: {},
        components: {}
    }
</script>


<style scoped>
</style>