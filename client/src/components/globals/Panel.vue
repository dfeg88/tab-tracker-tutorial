<template>
  <div class="white elevation-3">
    <v-toolbar flat dense dark class="blue-grey">
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <slot name="action" />
    </v-toolbar>

    <div class="pl-4 pr-4 t-2 pb-2">
      <slot>
        No slot content defined
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>

</style>
