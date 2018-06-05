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
      let songs = null;
      const search = req.query.search;
      if (search) {
        songs = await Song.findAll({
          where: {
            $or: [
              'title', 'artist', 'genre', 'album'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          },
          limit: 10
        });
      } else {
        songs = await Song.findAll({
          limit: 10
        });
      }
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
  },
  async updateSong (req, res, next) {
    try {
      await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      });
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: err,
        msg: `Unable to update song`
      });
    }
  }
};
