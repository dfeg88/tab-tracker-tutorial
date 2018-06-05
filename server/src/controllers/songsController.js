const {Song} = require('../models');

module.exports = {
  async post (req, res) {
    try {
      const song = await Song.create(req.body);
      res.send(song);
    } catch (err) {
      res.status(500).send({
        error: err,
        msg: 'An error has occurred whilst trying to create a song'
      });
    }
  },
  async getAllSongs (req, res, next) {
    try {
      const songs = await Song.findAll({
        limit: 10
      });
      res.send(songs);
    } catch (err) {
      res.status(500).send({
        error: err,
        msg: 'An error has occurred when retrieving songs'
      });
    }
  },
  async getSongById (req, res, next) {
    try {
      const song = await Song.findById(req.params.songId);
      res.send(song);
    } catch (err) {
      res.status(500).send({
        error: err,
        msg: 'An error has occurred retrieving this song'
      });
    }
  }
};
