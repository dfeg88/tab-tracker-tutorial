<template>
  <v-toolbar fixed class="cyan" color="primary" dark>
    <v-toolbar-items>
      <v-btn
        flat
        dark
        router
        to="home">
          <v-toolbar-title>TabTracker_Tut</v-toolbar-title>
        </v-btn>
      <v-btn flat dark>Browse</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        router
        to="login"
        >Login</v-btn>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        router
        to="register"
        >Sign Up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {

  }
}
</script>

<style scoped>

</style>
