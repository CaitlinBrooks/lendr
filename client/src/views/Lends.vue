<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs6>
        <h1>My Lends</h1>
        <v-list v-for="(lend, i) in this.myLends" :key="i">
          {{lend.title}}
        </v-list>
      </v-flex>
      <v-flex xs6>
        <h1>My Borrows</h1>
        <v-list v-for="(borrow, i) in this.myBorrows" :key="i">
          {{borrow.title}}
        </v-list>
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