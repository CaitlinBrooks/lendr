<template>
    <div class="Profile">
        <v-flex xs12 mx-3 mt-2 elevation-2>
            <v-card color="teal" class="white--text">
                <v-layout row>
                    <v-flex xs-5 py-1>
                        <v-img :src=this.user.picture height="125px" contain>
                        </v-img>
                    </v-flex>
                    <v-flex xs7>
                        <v-card-title primary-title>
                            <div>
                                <div class="headline">Welcome, {{this.user.name}}</div>
                                <div>You have 0 current lends</div>
                            </div>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider light></v-divider>
                <v-card-actions class="pa-3">
                    Your rating
                    <v-spacer></v-spacer>
                    <v-rating color="orange"></v-rating>
                </v-card-actions>
            </v-card>
        </v-flex>

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