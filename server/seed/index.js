const Promise = require('bluebird')
const {sequelize, Song, User} = require('../src/models');
const songs = require('./songs.json');
const users = require('./users.json');

sequelize.sync({force: true})
  .then(async function() {
    await Promise.all(
      users.map(user => {
        User.create(user);
      })
    );

    await Promise.all(
      songs.map(song => {
        Song.create(song);
      })
    );
  });
