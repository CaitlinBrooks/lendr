<template>
  <div class="Profile">
    <v-flex xs12 mx-3 mt-2 elevation-2>
      <v-card color="teal" class="white--text">
        <v-layout row>
          <v-flex xs-5 py-1 style="justify-content: center;">
            <v-img :src=this.user.picture height="125px" contain>
            </v-img>
          </v-flex>
          <v-flex xs-7>
            <v-card-title primary-title style="justify-content: center;">
              <div>
                <div class="headline">Welcome to {{this.user.name}}'s page</div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider light></v-divider>
        <v-card-actions class="pa-3">
          <v-flex>
            User's rating
            <v-rating v-model="rating" readonly color="orange"></v-rating>
            <v-btn @click="rateUser = true">Rate This User</v-btn>
            <v-dialog v-model="rateUser" max-width="290">
              <v-card>
                <v-card-title class="headline">How would you rate this user?</v-card-title>

                <v-rating v-model="newRating" color="orange"></v-rating>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" flat="flat" @click="rateUser = false">
                    Cancel
                  </v-btn>
                  <v-btn color="green darken-1" flat="flat" @click="sendRating">
                    Rate
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-flex>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-layout row wrap>
      <!-- SNACKBAR STUFF -->
      <v-snackbar v-model="snackbar" :bottom="y === 'bottom'" :left="x === 'left'" :multi-line="mode === 'multi-line'" :right="x === 'right'"
        :timeout="timeout" :top="y === 'top'" :vertical="mode === 'vertical'">
        You have unread borrows!
        <v-btn color="pink" flat @click="viewLends">
          View
        </v-btn>
      </v-snackbar>
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
        myCal: null,
        newRating: 0,
        rateUser: false
      }
    },
    computed: {
      user() {
        return this.$store.state.searchedUser
      },
      rating() {
        return this.$store.state.rating
      }
    },
    methods: {
      sendRating() {
        let userInfo = {
          rating: this.newRating,
          userId: this.$store.state.user._id
        }
        this.$store.dispatch('sendRating', userInfo)
        this.rateUser = false
      }
    }
  }
</script>


<style scoped>
</style>