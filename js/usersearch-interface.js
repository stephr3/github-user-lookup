var User = require('./../js/user.js').userModule;

$(document).ready(function() {
  $("#time").text(moment());
  $("#username-input").click(function(event){
    event.preventDefault();
    $("#repo-list").empty();
    $("#error").hide();
    $("#results").hide();
    username = $("#username").val();
    $("#username").val("");
    perPage = $("#per-page").val();
    $("#username-result").text(username);
    newUserSearch = new User(username, perPage);
    newUserSearch.getUserInformation();
    newUserSearch.getRepos();
  });
});
