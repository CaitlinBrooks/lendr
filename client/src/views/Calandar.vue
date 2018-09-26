<template>
  <!-- CALENDAR -->
  <v-flex xs12 sm6 class="my-3 mx-3">
    <v-date-picker v-model="myCal" :events="dueDates" :event-color="date => checkDate(date)" color="green lighten-1" header-color="teal darken-2"></v-date-picker>
  </v-flex>
</template>

<script>
  export default {
    name: 'Calandar',
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