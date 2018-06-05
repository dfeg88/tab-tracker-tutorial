<template>
  <div>
    <v-layout>
      <v-flex lg6 mb-4>
        <song-metadata :song="song" />
      </v-flex>
      <v-flex lg6 ml-4 mb-4>
        <you-tube :youtubeId="song.youtubeId"></you-tube>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex lg7 justify-center align-center>
        <tabs :tabs="song.tab"></tabs>
      </v-flex>

      <v-flex lg7 class="ml-4">
        <lyrics :lyrics="song.lyrics"></lyrics>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongMetadata from './SongMetadata'
import Lyrics from './Lyrics'
import Tabs from './Tabs'
import YouTube from './YouTube'
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.getSongById(songId)).data
  },
  components: {
    Panel,
    SongMetadata,
    YouTube,
    Lyrics,
    Tabs
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

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

textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
