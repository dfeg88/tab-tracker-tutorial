const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const songsController = require('./controllers/songsController');

module.exports = (app) => {
  // User account routes
  app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register);
  app.post('/login', AuthenticationController.login);

  // Songs routes
  app.get('/songs', songsController.getAllSongs);
  app.get('/songs/:songId', songsController.getSongById);
  app.post('/songs', songsController.post);
  app.put('/songs/:songId', songsController.updateSong);
};
