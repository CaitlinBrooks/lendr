<template>
  <div>
    <p>THIS IS THE LENDS PAGE</p>
  </div>
</template>

<script>
  export default {
    name: 'Lends',
    mounted: {
      getLends() {
        this.$store.dispatch('getLends', this.$store.state.user._id)
      },
      getBorrows() {
        this.$store.dispatch('getBorrows', this.$store.state.user._id)
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
    }
  }
</script>