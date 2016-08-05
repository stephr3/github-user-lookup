var User = require('./../js/user.js').userModule;

$(document).ready(function() {
  $("#username-input").click(function(event){
    event.preventDefault();
    username = $("#username").val();
    $("#username-result").text(username);
    newUserSearch = new User(username);
    newUserSearch.getRepos();
  });
});
