<template>
    <div class="Profile">
        <v-flex xs12 mx-3 mt-2 elevation-2>
            <v-card color="teal" class="white--text">
                <v-layout row>
                    <v-flex xs-5 py-1 style="justify-content: center;">
                        <v-img :src=this.user.picture height="125px" contain>
                        </v-img>
                        <v-btn color="teal accent-4" dark @click="changeImg = !changeImg">Change Image</v-btn>
                        <v-dialog v-model="changeImg" max-width="500px">
                            <v-card>
                                <v-card-title>
                                    Update Profile Image
                                </v-card-title>
                                <v-card-text>
                                    <v-form ref="form" @submit.prevent="updateProfilePicture">
                                        <v-text-field v-model="imgUrl" label="Image URL" required></v-text-field>
                                        <v-btn type="submit" color="teal accent-4" class="white--text" @click="changeImg = false">
                                            Submit
                                        </v-btn>
                                    </v-form>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn color="teal accent-4" flat @click="changeImg = false">Close</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-flex>
                    <v-flex xs7>
                        <v-card-title primary-title style="justify-content: center;">
                            <div>
                                <div class="headline">Welcome, {{this.user.name}}</div>
                                <div>You have {{this.lends.length}} current lends</div>
                                <div>You have {{this.borrows.length}} current borrows</div>
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
        <v-layout row wrap>
            <v-flex xs12 sm6 class="hidden-xs-only mx-3 mt-2">
                <v-date-picker color="green lighten-1" header-color="teal darken-2"></v-date-picker>
            </v-flex>
            <!-- SNACKBAR STUFF -->
            <v-snackbar v-model="snackbar" :bottom="y === 'bottom'" :left="x === 'left'" :multi-line="mode === 'multi-line'" :right="x === 'right'"
                :timeout="timeout" :top="y === 'top'" :vertical="mode === 'vertical'">
                You have unread borrows!
                <v-btn color="pink" flat @click="viewLends">
                    View
                </v-btn>
            </v-snackbar>
            <v-btn color="teal accent-4" dark @click="newLend = !newLend">New Lend</v-btn>
            <!-- New Lend Form -->
            <v-dialog v-model="newLend" max-width="500px">
                <v-card>
                    <v-card-title>
                        Create New Lend
                    </v-card-title>
                    <v-card-text>
                        <v-form ref="form" @submit.prevent="findUserId">
                            <v-text-field v-model="lendTitle" label="Title" required></v-text-field>
                            <v-text-field v-model="lendDescription" label="Item Description" required></v-text-field>
                            <v-text-field v-model="lendBorrower" label="Who Is This For?" required></v-text-field>
                            <!-- date picker -->
                            <v-flex xs12 sm6 md4>
                                <v-menu ref="menu" :close-on-content-click="false" v-model="menu" :nudge-right="40" :return-value.sync="dateMenu" lazy transition="scale-transition"
                                    offset-y full-width min-width="290px">
                                    <v-text-field slot="activator" v-model="date" label="Due Date" prepend-icon="event" readonly></v-text-field>
                                    <v-date-picker v-model="date" no-title scrollable>
                                        <v-spacer></v-spacer>
                                        <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                                        <v-btn flat color="primary" @click="$refs.menu.save(dateMenu)">OK</v-btn>
                                    </v-date-picker>
                                </v-menu>
                            </v-flex>
                            <v-btn type="submit" color="teal accent-4" class="white--text" @click="confirmLend = !confirmLend">
                                Submit
                            </v-btn>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="teal accent-4" flat @click="newLend=false">Close</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <!-- CONFIRMATION -->
            <v-dialog v-model="confirmLend" max-width="500px">
                <v-card>
                    <v-card-title>
                        Confirm New Lend
                    </v-card-title>
                    <v-card-text text-center>
                        <div class="title">Are you sure you want to create this lend?</div>
                        <div class="subheading">Title</div>
                        <div class="body-1">{{this.lendTitle}}</div>
                        <div class="subheading">Description</div>
                        <div class="body-1">{{this.lendDescription}}</div>
                        <div class="subheading">Borrower</div>
                        <div class="body-1">{{this.lendBorrower}}</div>
                    </v-card-text>
                    <v-btn @click="createLend">Confirm Lend</v-btn>
                    <v-card-actions>
                        <v-btn color="teal accent-4" flat @click="confirmLend=false">Cancel</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-layout>
    </div>
</template>


<script>
    export default {
        name: 'Profile',
        created() {
            //blocks users not logged in
            if (!this.$store.state.user._id) {
                this.$router.push({ name: "home" });
            }
        },
        data() {
            return {
                imgUrl: '',
                changeImg: false,
                newLend: false,
                confirmLend: false,
                lendTitle: '',
                lendDescription: '',
                lendBorrower: '',
                date: null,
                dateMenu: false,
                menu: false,
                y: 'bottom',
                x: 'right',
                mode: '',
                timeout: 6000,
                text: 'Hello, I\'m a snackbar'
            }
        },
        computed: {
            user() {
                return this.$store.state.user
            },
            lends() {
                return this.$store.state.lends
            },
            borrows() {
                return this.$store.state.borrows
            },
            snackbar() {
                return this.$store.state.snackbar
            }
        },
        methods: {
            createLend() {
                let lendData = {
                    title: this.lendTitle,
                    description: this.lendDescription,
                    borrower: {
                        userId: this.$store.state.borrower
                    },
                    lendr: {
                        userId: this.user._id
                    },
                    dueDate: this.date
                }
                this.$store.dispatch('createLend', lendData)
                this.newLend = false
                this.confirmLend = false
            },
            deleteLend() { },
            updateProfilePicture() {
                let userData = {
                    _id: this.user._id,
                    picture: this.imgUrl
                }
                this.$store.dispatch('updateProfilePicture', userData)
                console.log(userData)
            },
            findUserId() {
                this.$store.dispatch('findUserId', this.lendBorrower)
            },
            viewLends() {
                this.$router.push('Lends')
            }
        },
        components: {}
    }
</script>


<style scoped>
</style>