<template>
  <panel title="Song Metadata">
    <v-layout>
      <v-flex lg6>
        <div class="song-title">
          {{song.title}}
        </div>
        <div class="song-artist">
          {{song.artist}}
        </div>
        <div class="song-genre">
          {{song.genre}}
        </div>
      </v-flex>

      <v-flex lg6>
        <img class="album-img" :src="song.albumImageUrl">
        <h5>{{song.album}}</h5>
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'song'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
