/*
Architecture:
- architect finds list of requirements and then think about the functions, classes,
constructors are needed to accomplish the big picture. it's the umbrella of the what not the how.
- cli means command line interface
- using quotation marks gives the parameter for what you're looking for exactly
Constructors
Call backs

for the homework you're creating a loop with recursion

Activity 1 - Architecture
CLI.js / WeatherAdmin.js / UserSearch.js

As a best practice, sketch the architecture of your application before you start writing code.

For this exercise, start by describing what your application does. Do this in a bullet list.

Next, decide how you might divvy up these responsibilities. Would you write a single module that handles all of them?
Would you write one module for each bullet list? Something else?
Be sure to justify your decision.

Finally, draw a diagram describing the relationships between your modules.
Each arrow should describe a dependency—that is, an arrow from module A to module B indicates that module A uses module B.

- use weather npm to get weather
- use inquirer - to ask prompts from user/take input?
- make .txt for recording queries (readFile, writeFile)
- make user constructor (take in input: name, query (lcoation), record date)
- make admin constructor (record name of user, location, date)
- group similar tasks (constructors)
- require modules: admin, user info, weather

Implement the logic for the UserSearch component.
You should begin planning the component with pseudocode.

This component requires you to use the weather-js NPM package.
Take a moment to research and experiment with the API, documented here: https://www.npmjs.com/package/weather-js


Create a UserSearch constructor.
It should accept a user's name and location as arguments, and store the value of Date.now() in a date property. */
var weather = require('weather-js');

// Options:
// search:     location name or zipcode
// degreeType: F or C

weather.find({search: 'Houston, Texas', degreeType: 'F'}, function(err, result) {
  if(err) console.log(err);

  console.log(JSON.stringify(result, null, 2));
});



const inquirer = require ("inquirer");
const weather-js = require ("weather-js");

var userType = process.argv[2];
var name = process.argv[3];
var location = process.argv[4];

function UserSearch (name, location) {
  this.name = name
  this.location = location
  this.date = Date.Now(){

  };

};
this.getWeather = function (){
  weather.find({
    search: location;
    degreeType: "F";
    function(err, result){
  if (err) console.log(err);
  console.log(JSON.stringify(result, null, 2));
  });
};


module.exports = UserSearch;
var user = new UserSearch (name, location);


/*
Implement the logic for the WeatherAdmin component. As with the UserSearch component, you should start with pseudocode.

This component requires you to read and save information. Be sure to require the appropriate Node package.

Create a WeatherAdmin constructor. This constructor should return an object with two methods.

One of those methods is newUserSearch, which should accept a user's name and location; search for the weather in their area;
and save the user's information in a log of all searches users have made thus far. */


var fs = require ("fs");
var UserSearch = require("./UserSearch");

var WeatherAdmin = function (){
  this.getData = function() {
    console.log(data);
  });
};

const inquirer = require ("inquirer");
const weather-js = require ("weather-js");

var name = process.argv[3];
var location = process.argv[4];

function UserSearch (name, location) {
  this.name = name
  this.location = location
  this.date = Date.Now(){

  };
  this.getData = function (){
    weather.find({
      search: location;
      function(err, result){
    if (err) console.log(err);
    console.log(JSON.stringify(result, null, 2));
    });
    this.getWeather = function (){
      weather.find({
        search: location;
        degreeType: "F";
        function(err, result){
      if (err) console.log(err);
      console.log(JSON.stringify(result, null, 2));
      });
    };
  };
  fs.readFile...


  // some other random code
  fs.appendFile("log.txt",logTxt);
  newUserSearch.getWeather();
  /*

The other method is getData, which should log or return a list of all of the searches users have executed thus far.

Test the WeatherAdmin component by feeding it dummy data for now.

Objects returned by the UserSearch constructor should also have a getWeather method, which should log or return the weather in the user's location.

Test your UserSearch constructor by feeding it dummy data for now.

pseudocode the class...api, search term, do i need a call back function? a variable? an array?
Build user class

*/
