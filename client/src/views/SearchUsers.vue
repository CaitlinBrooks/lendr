<template>
  <v-container fluid fill-height>
    <v-slide-y-transition mode="out-in">
      <v-layout align-center justify-center row>
        <v-form ref="form" class="elevation-2 pa-5" @submit.prevent="findUserId">
          <v-text-field v-model="username" type="text" label="Search for Username"></v-text-field>
          <v-btn type="submit" class="teal lighten-2">
            Search
          </v-btn>
        </v-form>
        <v-dialog v-model="loading" hide-overlay persistent width="300">
          <v-card color="primary" dark>
            <v-card-text>
              Please stand by
              <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        username: '',
        loading: false
      }
    },
    methods: {
      findUserId() {
        this.loading = true
        this.$store.dispatch('findUser', this.username)
      },
      pushToPage() {
        this.loading = false
        this.$router.push('profile')
      }
    },
    watch: {
      loading(val) {
        if (!val) return

        setTimeout(() => (this.loading = false), 1000)

      }
    }
  }
</script>