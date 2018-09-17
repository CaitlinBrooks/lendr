<template>
  <v-container>
    <v-layout row wrap justify-space-between>
      <!-- Lends -->
      <v-flex xs12 md4 two-line>
        <div class="display-3">
          My Lends
        </div>
        <v-divider></v-divider>
        <v-expansion-panel>
          <v-expansion-panel-content color="teal" v-for="(lend, i) in this.myLends" :key="i">
            <div slot="header">{{lend.title}}</div>
            <v-card>
              <v-list-tile-sub-title>{{lend.description}}</v-list-tile-sub-title>
              <v-layout row>
                <div v-if=lend.borrower.returned>
                  This item has been returned
                </div>
                <div v-else>
                  <v-btn color="teal" @click="validateReturn(lend)">Has this been returned?</v-btn>
                </div>
                <div v-if=lend.lendr.lent>
                  Your borrower has recieved this.
                </div>
                <div v-else class="red--text">
                  Your borrower has not recieved this.
                </div>
              </v-layout>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <!-- Borrows -->
      <v-flex xs12 md4 two-line>
        <div class="display-3">
          My Borrows
        </div>
        <v-divider></v-divider>
        <v-expansion-panel>
          <v-expansion-panel-content color="teal" v-for="(borrow, i) in this.myBorrows" :key="i">
            <div slot="header">{{borrow.title}}</div>
            <v-container justify-center>
              <v-card>
                <v-list-tile-sub-title justify-center>{{borrow.description}}</v-list-tile-sub-title>
                <div v-if=borrow.lendr.lent justify-center>
                  You have marked this as recieved.
                </div>
                <div v-else justify-center>
                  <v-btn color="teal" @click="validateLend(borrow)">Have you recieved this item?</v-btn>
                </div>
                <div v-if=borrow.borrower.returned justify-center>
                  This has been returned
                </div>
                <div v-else class="red--text" justify-center>
                  This item has not been returned
                </div>
              </v-card>
            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Lends',
    created() {
      //blocks users not logged in
      if (!this.$store.state.user._id) {
        this.$router.push({ name: "home" });
      }
    },
    computed: {
      myLends() {
        return this.$store.state.lends
      },
      myBorrows() {
        return this.$store.state.borrows
      },
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      validateLend(borrow) {
        this.$store.dispatch('validateLend', borrow)
      },

      validateReturn(lend) {
        this.$store.dispatch('validateReturn', lend)
      }
    }
  }
</script>