<template>
  <v-container fluid fill-height>
    <v-slide-y-transition mode="out-in">
      <v-layout align-center justify-center row>
        <v-form v-if="newUserForm" ref="form" class="elevation-2 pa-5" @submit.prevent="register">
          <v-text-field v-model="newUser.name" type="text" label="Username" required></v-text-field>
          <v-text-field v-model="newUser.email" type="text" label="E-mail" required></v-text-field>
          <v-text-field v-model="newUser.password" type="password" label="Password" required></v-text-field>
          <v-btn type="submit" class="teal lighten-2">
            submit
          </v-btn>
          <v-btn @click="newUserForm = !newUserForm" class="teal lighten-2">Returning user?</v-btn>
        </v-form>
        <v-form v-else ref="form" class="elevation-2 pa-5" @submit.prevent="loginUser">
          <v-text-field v-model="creds.name" type="text" label="Username" required id="username-field"></v-text-field>
          <v-text-field v-model="creds.password" type="password" label="Password" required id="password-field"></v-text-field>
          <v-btn type="submit" class="teal lighten-2">
            submit
          </v-btn>
          <v-btn @click="newUserForm = !newUserForm" class="teal lighten-2">New user?</v-btn>
        </v-form>
      </v-layout>
    </v-slide-y-transition>
    <v-tour name="myTour" :steps="steps"></v-tour>
  </v-container>
</template>


<script>
  export default {
    name: 'Home',
    data() {
      return {
        newUserForm: false,
        creds: {
          email: "",
          password: ""
        },
        newUser: {
          email: "",
          password: "",
          name: ""
        },
        steps: [
          {
            target: '#username-field',  // We're using document.querySelector() under the hood
            content: `Welcome to Lendr! We've set up an example account for you to easily explore all of Lendr's functionality!`,
            params: {
              placement: 'top'
            }
          },
          {
            target: '#username-field',
            content: 'Use username "Charlie"'
          },
          {
            target: '#password-field',
            content: 'Use password "test1"',
          }
        ]
      }
    },
    methods: {
      register() {
        this.$store.dispatch("register", this.newUser);
      },
      loginUser() {
        this.$store.dispatch("login", this.creds);
      }
    },
    mounted: function () {
      this.$tours['myTour'].start()
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