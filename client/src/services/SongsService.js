import Api from '@/services/Api'

export default {
  getAllSongs () {
    return Api().get('songs')
  },
  getSongById (id) {
    return Api().get(`songs/${id}`)
  },
  post (song) {
    return Api().post('songs', song)
  }
}
