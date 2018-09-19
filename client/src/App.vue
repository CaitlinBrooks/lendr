<template>
  <v-app>
    <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed
      app>
      <v-list>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i">
          <v-list-tile-content>
            <v-list-tile-title :style="{ cursor: 'pointer'}" @click='item.action' v-text="item.title" class="teal--text text--lighten-2"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :clipped-left="clipped" class="teal lighten-2">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <span class="capitalize">{{currentRoute}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <img src="./assets/Untitled.png" height="35">
      </v-img>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" class="teal lighten-2 justify-space-between" app>
      <span class="px-3">&copy; 2018</span>
      <span class="px-3">Make lending easier</span>
    </v-footer>
  </v-app>
</template>

<script>

  export default {
    name: 'App',
    data() {
      return {
        userSearch: '',
        clipped: false,
        drawer: false,
        fixed: false,
        items: [{

          title: 'My Profile',
          action: this.profilePage
        },
        {
          title: 'My Lends',
          action: this.lendsPage
        },
        {
          title: 'My Calendar',
          action: this.placeholder
        },
        {
          title: 'Search Users',
          action: this.searchUsers
        },
        {
          title: 'Logout',
          action: this.logout
        }],
        miniVariant: false,
        right: true,
        rightDrawer: false,
      }
    },
    computed: {
      currentRoute() {
        return this.$route.name
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout')
      },

      placeholder() {
        console.log('No Function Yet!')
      },

      lendsPage() {
        this.$router.push('Lends')
      },

      profilePage() {
        this.$router.push('Profile')
      },

      searchUsers() {
        this.$router.push('SearchUsers')
      }
    }
  }
</script>

<style>
  .capitalize {
    text-transform: capitalize;
  }

  .menu-border {
    border-bottom: grey, solid, 1px
  }
</style>