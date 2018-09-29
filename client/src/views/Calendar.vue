<template>
  <!-- CALENDAR -->
  <v-container fluid fill-height>
    <v-layout row wrap justify-center full-height align-center>
      <v-flex xs12 sm6 class="my-3 mx-3">
        <v-flex text-xs-center>
          <p class="display-2 font-weight-medium">
            My Calendar
          </p>
        </v-flex>
        <v-layout>
          <v-flex>
            <v-date-picker full-width landscape v-model="myCal" :events="dueDates" :event-color="date => checkDate(date)"
              color="green lighten-1" header-color="teal darken-2"></v-date-picker>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Calendar',
    data() {
      return {
        myCal: null
      }
    },
    computed: {
      dueDates() {
        return this.$store.getters.dueDates
      }
    },
    methods: {
      checkDate(date) {
        let today = new Date()
        if (parseInt(date[5] + date[6]) < today.getMonth() + 1) {
          return "red"
        }
        else if (parseInt(date[8] + date[9]) < today.getDate()) {
          return "red"
        }
        else {
          return "green"
        }
      }
    }
  }
</script>