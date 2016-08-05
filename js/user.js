var apiKey = require('./../.env').apiKey;

function User(username, perPage) {
  this.username = username;
  this.perPage = perPage;
}

User.prototype.getRepos = function(){
  var self = this;
  $.get('https://api.github.com/users/' + self.username + '/repos?&per_page=' + self.perPage + '&access_token=' + apiKey).then(function(response){
    console.log(response.length)
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
    $("#user-image").attr("src", response.avatar_url);
    if(response.name){
      $("#user-info-name").text(response.name);
    } else {
      $("#user-info-name").text("No name given");
    }
    if(response.location){
      $("#user-info-location").text(response.location);
    } else {
      $("#user-info-location").text("No location given");
    }
    if(response.email){
      $("#user-info-email").text(response.email);
    } else {
      $("#user-info-email").text("No email given");
    }
    $("#user-info-url").text(response.html_url);
    $("#user-info-followers").text(response.followers);
    $("#user-info-following").text(response.following);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
