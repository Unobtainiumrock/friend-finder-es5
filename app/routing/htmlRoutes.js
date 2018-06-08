
var path = require('path');
var data = require(path.join(__dirname,'../data/friends'));

var htmlRoutes = {
  
  attach: function(app) {
    app.get('/view',this.nonSense);
    app.get('/survey',this.sendSurvey);
    app.get('/',this.home);
  },

  sendSurvey: function(req,res) {
    var body = req.body;
    res.sendFile(path.join(__dirname,'../../app/public/survey.html'));
  },

  home: function(req,res) {
    var body = req.body;
    res.sendFile(path.join(__dirname,'../../app/public/home.html'));
  },

  nonSense: function(req,res) {
    var body = req.body;
    res.sendFile(path.join(__dirname,'../../app/public/potential-friends.html'));
  }

}

module.exports = htmlRoutes;
