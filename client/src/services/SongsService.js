import Api from '@/services/Api'

export default {
  getAllSongs (search) {
    return Api().get('songs', {
      params: {
        search: search
      }
    })
  },
  getSongById (id) {
    return Api().get(`songs/${id}`)
  },
  post (song) {
    return Api().post('songs', song)
  },
  updateSong (song) {
    return Api().put(`songs/${song.id}`, song)
  }
}
