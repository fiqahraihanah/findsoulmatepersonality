var path = require("path");

module.exports = function(app) {
  app.get("/soulmatePersonality", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/soulmatePersonality.html"));
  });

  app.use(function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  });
};
