<template>
  <v-container>
    <v-layout row wrap justify-space-between>
      <!-- Lends -->
      <v-flex xs12 md4 two-line>
        <div class="display-1">
          My Lends
        </div>
        <v-divider></v-divider>
        <v-expansion-panel>
          <v-expansion-panel-content color="teal" v-for="(lend, i) in this.myLends" :key="i">
            <div slot="header">{{lend.title}}</div>
            <v-card color="grey darken-3 white--text">
              <div class="pl-4">{{lend.description}}</div>
              <v-layout row class="pt-2">
                <div v-if=lend.borrower.returned class="pl-4 pt-2">
                  This item has been returned
                </div>
                <div v-else class="pl-3">
                  <v-btn color="teal" @click="validateReturn(lend)">Has this been returned?</v-btn>
                </div>
              </v-layout>
              <v-layout row class="pt-2 pl-4">
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
        <div class="display-1">
          My Borrows
        </div>
        <v-divider></v-divider>
        <v-expansion-panel>
          <v-expansion-panel-content color="teal" v-for="(borrow, i) in this.myBorrows" :key="i">
            <div slot="header">{{borrow.title}}</div>
            <v-card color="grey darken-3 white--text">
              <div class="pl-4">{{borrow.description}}</div>
              <v-layout row class="pt-2">
                <div v-if=borrow.lendr.lent class="pl-4 pt-2">
                  You have marked this as recieved.
                </div>
                <div v-else class="pl-3">
                  <v-btn color="teal" @click="validateLend(borrow)">Have you recieved this item?</v-btn>
                </div>
              </v-layout>
              <v-layout row class="pt-2 pl-4">
                <div v-if=borrow.lendr.returned>
                  This item has been returned.
                </div>
                <div v-else class="red--text">
                  Your lendr has not marked this as returned.
                </div>
              </v-layout>
            </v-card>
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
      },
      changeDueDate(date) {
        let today = new Date()
        if (parseInt(date[5] + date[6]) < today.getMonth() + 1) {
          return "red"
        }
        else if (parseInt(date[8] + date[9]) < today.getDate()) {
          return "red"
        }
        // this.store.dispatch.//will dispatch put prevent lending return date prior to current date.
      }
    }
  }
</script>