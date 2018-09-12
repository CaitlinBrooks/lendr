<template>
  <v-container fluid fill-height>
    <v-slide-y-transition mode="out-in">
      <v-layout align-center justify-center row>
        <v-form v-if="newUser" ref="form" v-model="valid" class="elevation-2 pa-5">
          <v-text-field v-model="username" type="text" label="Username" required></v-text-field>
          <v-text-field v-model="email" type="text" label="E-mail" required></v-text-field>
          <v-text-field v-model="password" type="password" label="Password" required></v-text-field>
          <v-btn @click="submit" class="teal lighten-2">
            submit
          </v-btn>
          <v-btn @click="newUser = !newUser" class="teal lighten-2">Returning user?</v-btn>
        </v-form>
        <v-form v-else ref="form" v-model="valid" class="elevation-2 pa-5">
          <v-text-field v-model="username" type="text" label="Username" required></v-text-field>
          <v-text-field v-model="password" type="password" label="Password" required></v-text-field>
          <v-btn @click="submit" class="teal lighten-2">
            submit
          </v-btn>
          <v-btn @click="newUser = !newUser" class="teal lighten-2">New user?</v-btn>
        </v-form>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>


<script>
  export default {
    name: 'Home',
    data() {
      return {
        newUser: true
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>