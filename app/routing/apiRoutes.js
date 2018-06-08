
var path = require('path');
var users = require(path.join(__dirname, '../data/friends'));

var APIRoutes =  {

  attach: function(app) {
    app.get('/api/friends', this.grabFriends);
    app.post('/api/friends', this.handleSurvey.bind(this));
  },

  grabFriends: function(req, res) {
    var body = req.body;
    res.status(200).json(users);
  },

  handleSurvey: function(req, res) {
    var body = req.body;
    var scores = body.scores;
    scores = scores.map(function(score) {parseInt(score)});
    body['scores'] = scores;
    var bestFriend = this.findBestMatch(scores);
    users.push(body);
    res.status(200).json(bestFriend);
  },

  findBestMatch: function(scores) {
    var formAnswers = scores;
    var differences = users.map(function(user) {
      return user.scores.reduce(function(mem, val, idx) {
        return mem + Math.abs(formAnswers[idx] - val);
      }, 0);
    });

    var indexOfBestMatch = differences.indexOf(Math.min.apply(null,differences));
    var bestMatch = users[indexOfBestMatch];
    var name = bestMatch.name;
    var photo = bestMatch.photo;
    return { name: name, photo: photo };
  }

}

module.exports = APIRoutes;




