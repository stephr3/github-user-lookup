var User = require('./../js/user.js').userModule;

$(document).ready(function() {
  $("#time").text(moment());
  $("#username-input").click(function(event){
    event.preventDefault();
    $("#repo-list").empty();
    $("#error").hide();
    username = $("#username").val();
    $("#username").val("");
    $("#username-result").text(username);
    newUserSearch = new User(username);
    newUserSearch.getUserInformation();
    newUserSearch.getRepos();
  });
});
