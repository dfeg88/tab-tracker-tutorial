<template>
  <v-layout>
    <v-flex xs6 lg4>
      <v-form>
      <panel title="Song Metadata">
        <v-text-field
          required
          :rules="[required]"
          label="Title"
          type="text"
          v-model="song.title">
        </v-text-field>

        <v-text-field
          required
          :rules="[required]"
          label="Artist"
          type="text"
          v-model="song.artist">
        </v-text-field>

        <v-text-field
          required
          :rules="[required]"
          label="Genre"
          type="text"
          v-model="song.genre">
        </v-text-field>

        <v-text-field
          required
          :rules="[required]"
          label="Album"
          type="text"
          v-model="song.album">
        </v-text-field>

        <v-text-field
          required
          :rules="[required]"
          label="Album Cover Image (URL)"
          type="text"
          v-model="song.albumImageUrl">
        </v-text-field>

        <v-text-field
          required
          :rules="[required]"
          label="Youtube ID"
          type="text"
          v-model="song.youtubeId">
        </v-text-field>
      </panel>
      </v-form>
    </v-flex>
    <v-flex lg8>
      <panel title="Songs Lyrics &amp; Tabs" class="ml-4">
        <v-text-field
          required
          :rules="[required]"
          label="Lyrics"
          type="text"
          multi-line
          v-model="song.lyrics">
        </v-text-field>

        <v-text-field
          required
          :rules="[required]"
          label="Tab"
          type="text"
          multi-line
          v-model="song.tab">
        </v-text-field>
      </panel>
      <div v-if="error">
        <v-alert
          dismissible
          class="ml-4"
          v-model="error"
          transition="scale-transition"
          error>
          {{error}}
        </v-alert>
      </div>
      <v-btn
        dark
        class="cyan"
        @click="updateSong">
        Create Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      required: (value) => !!value || 'Required field',
      error: null
    }
  },
  methods: {
    async updateSong () {
      this.error = null
      const isFormValid = Object.keys(this.song).every(key => !!this.song[key])

      if (!isFormValid) {
        this.error = `Please fill in all required fields`
        return false
      }

      const songId = this.$store.state.route.params.songId

      try {
        console.log(this.song)
        await SongsService.updateSong(this.song)
        this.$router.push({
          name: 'songs',
          params: {
            songId: songId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.getSongById(songId)).data
  }
}
</script>

<style scoped>

</style>
