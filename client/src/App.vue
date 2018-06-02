<template>
  <v-app>
    <page-header />
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app color="accent"></v-footer>
  </v-app>
</template>

<script>
import PageHeader from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  padding: 0px;
}
</style>
