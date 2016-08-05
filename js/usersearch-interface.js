var User = require('./../js/user.js').userModule;

$(document).ready(function() {
  $("#username-input").click(function(event){
    event.preventDefault();
    username = $("#username").val();
    newUserSearch = new User(username);
    console.log(newUserSearch);
    newUserSearch.getRepos();
  });
});
