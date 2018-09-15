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
              <div v-if=lend.borrower.returned>
                This item has been returned
              </div>
              <div v-else>
                <v-btn color="teal">Has this been returned?</v-btn>
              </div>
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
          <v-expansion-panel-content color="teal" v-for="(borrows, i) in this.myBorrows" :key="i">
            <div slot="header">{{borrows.title}}</div>
            <v-card>
              <v-list-tile-sub-title>{{borrows.description}}</v-list-tile-sub-title>
              <div v-if=borrows.lendr.lent>
                You have marked this as recieved.
              </div>
              <div v-else>
                <v-btn color="teal">Have you recieved this item?</v-btn>
              </div>
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
    }
  }
</script>