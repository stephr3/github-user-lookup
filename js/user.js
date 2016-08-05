var apiKey = require('./../.env').apiKey;

function User(username) {
  this.username = username;
}

User.prototype.getRepos = function(){
  var self = this;
  $.get('https://api.github.com/users/' + self.username + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    $("#results").show();
    for(var i=0; i<response.length; i++){
      $("#repo-list").append("<li><strong>" + response[i].name + "</strong>: " + response[i].description + "</li>");
    };
  }).fail(function(error){
    console.log(error.responseJSON.message);
    $("#error").show();
    $("#error-message").text(error.responseJSON.message);
  });
};

exports.userModule = User;
