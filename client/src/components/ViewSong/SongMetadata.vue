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

        <v-btn
          dark
          class="cyan"
          @click="navigateTo({
            name: 'song-edit',
            params: {
              songId: song.id
            }
          })">
          Edit Song
        </v-btn>
      </v-flex>

      <v-flex lg6>
        <img class="album-img" :src="song.albumImageUrl">
        <h5>{{song.album}}</h5>
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  props: [
    'song'
  ]
}
</script>

<style scoped>
.album-img {
  width: 65%;
  margin: 0 auto;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24;
}

.song-genre {
  font-size: 18;
}
</style>
