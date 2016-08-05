# Github User Lookup
## *By Stephanie Gurung*

##### _With this application, a user can enter a Github username and receive a list of names and descriptions of the last 30 Github repositories the user has created._

## Technologies Used

* Node JS<br>
* Gulp<br>
* Bower

Installation
------------
Clone Github Repository:
```
$ git clone https://github.com/stephr3/github-user-lookup.git
```
Install NPM dependencies:
```
$ npm install
```
Install Bower dependencies:
```
$ bower install
```
Build the project:
```
$ gulp build
```
Boot up the server in your browser of choice:
```
$ gulp serve
```
__Note:__ This project is depended on the Github API, which will only allow up to 60 server requests per hour. If you would like more server requests, you must create your own personal access token.

* Visit the settings section of your Github account. Select *Personal Access Tokens* from the sidebar. Click *Gnerate New Token*.

* Do not select any options. Click *Generate Token*.

* Place your token in a .env file at the top level of the project directory.

Save this code in your .env file:
```
var apiKey = "YOUR TOKEN HERE";

exports.apiKey = apiKey;
```

* Add .env to your .gitignore file.

License
-------
_This software is licensed under the MIT license._<br>
Copyright (c) 2016 **Stephanie Gurung**
