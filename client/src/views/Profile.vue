<template>
    <div class="Profile">
        <v-flex xs12 mx-3 mt-2 elevation-2>
            <v-card color="teal" class="white--text">
                <v-layout row>
                    <v-flex xs-5 py-1>
                        <v-img :src=this.user.picture height="125px" contain>
                        </v-img>
                        <v-btn color="teal accent-4" dark @click="changeImg = !changeImg">Change Image</v-btn>
                        <v-dialog v-model="changeImg" max-width="500px">
                            <v-card>
                                <v-card-title>
                                    Update Profile Image
                                </v-card-title>
                                <v-card-text>
                                    <v-form v-model="valid">
                                        <v-text-field v-model="imgUrl" label="Image URL" required></v-text-field>
                                        <v-btn type="submit" color="teal accent-4" class="white--text" @click="updateProfilePicture">
                                            Submit
                                        </v-btn>
                                    </v-form>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn color="primary" flat @click="changeImg=false">Close</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
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
            return {
                imgUrl: '',
                changeImg: false
            }
        },
        computed: {
            user() {
                return this.$store.state.user
            }
        },
        methods: {
            createLend() { },
            lendConfirm() { },
            deleteLend() { },
            updateProfilePicture() {
                this.$store.dispatch('updateProfilePicture', userData = {
                    _id: this.user._id,
                    imgUrl: this.imgUrl
                })
            },
        },
        components: {}
    }
</script>


<style scoped>
</style>