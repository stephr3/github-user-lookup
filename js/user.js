var apiKey = require('./../.env').apiKey;

function User(username) {
  this.username = username;
}

User.prototype.getRepos = function(){
  var self = this;
  $.get('https://api.github.com/users/' + self.username + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
