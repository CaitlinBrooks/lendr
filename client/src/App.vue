<template>
  <v-app>
    <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed
      app>
      <v-list>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i">
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" class="teal--text text--lighten-2"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :clipped-left="clipped" class="teal lighten-2">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title><span class="capitalize">{{currentRoute}}</span></v-toolbar-title>
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
        clipped: false,
        drawer: false,
        fixed: false,
        items: [{
          title: 'My Lends'
        },
        {
          title: 'My Profile'
        },
        {
          title: 'My Other Stuff'
        },
        {
          title: 'More of my stuff'
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
    }
  }
</script>

<style>
  .capitalize {
    text-transform: capitalize;
  }
</style>