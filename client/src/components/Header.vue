<template>
  <v-toolbar fixed class="cyan" color="primary" dark>
    <v-toolbar-title mr-4>
      <router-link
        class="home"
        tag="span"
        :to="{
          name: 'songs'
        }">
        tabTrackerTut
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn
        flat
        dark
        router
        to="/songs">
        Browse
        </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        router
        to="/login"
        >Login</v-btn>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        router
        to="/register"
        >Sign Up</v-btn>
        <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat
        dark
        router
        @click="logout"
        >Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>

<style scoped>
  .home {
    cursor: pointer;
    padding: 0.5em;
  }
</style>
