var apiKey = require('./../.env').apiKey;

function User(username) {
  this.username = username;
}

User.prototype.getRepos = function(){
  var self = this;
  $.get('https://api.github.com/users/' + self.username + '/repos?access_token=' + apiKey).then(function(response){
    $("#results").show();
    for(var i=0; i<response.length; i++){
      $("#repo-list").append("<li><strong>" + response[i].name + "</strong>: " + response[i].description + " <em>Created " +moment(response[i].created_at).format("M/DD/YYYY")+ "</em></li>");
    };
  }).fail(function(error){
    $("#error").show();
    $("#error-message").text(error.responseJSON.message);
  });
};

User.prototype.getUserInformation = function(){
  var self= this;
  $.get('https://api.github.com/users/' + self.username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
