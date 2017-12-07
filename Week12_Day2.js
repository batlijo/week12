/*
this is stuff you send via command line for warm up 1:
node programmersWithPrompt
Prints out questions

What is important is this:
stored within the variable answers inside ofthe .then statement
inquirer.prompt([
  {
  name: "name"
}
])

inquirer.prompt ([
  {think of this as the promise, as the stuff you want to receive after function happens}
  call back error, null to let you know if there is an error
])
]).then(function(answers) {
  this object gives you access to everything
}

recursion is a function defined by itself, you need a base case
recursive data structures occur in real life

function rec(n){
  if (n ---0) {
    return console.log(n)
  }
  return rec(n-1)
}
what is the output of rec(4), it's not going to work bc its not
logging it

RECURSION:
1. BASE case
2. SOLVE SUB PROBLEM, if you solve one part of a small problem then you're able
to solve the larger problem
3. RECURSE

MUTES:
-Uses the runtime stack
-may want to learn a bit about how coputers work and how programs are executed

PROTOYPE:
- A property on a function object
- Sets up an instances
  - proto_property
- Enables inheritance
- Using the "new" keyword sets up on instance's _proto_
- JavaScript Prototypes, all javascript objects inherit the properties and methods
from their prototype. Objects created using an object literal, or with new Object(), inherit
from a prototype called Object.prototype... The object.prototype is on the top of the prototype chain.


var inquirer = require('inquirer');
inquirer.prompt([/* Pass your questions in here ).then(answers => {
    // Use user feedback for... whatever!!
});

WTF IS A CONSTRUCTOR>>??
a function that gives you an object and allows you to create multiple objects and add new attributes.
A constructor is a special method of a class or structure in object-oriented
programming that initializes an object of that type. A constructor is an instance method
that usually has the same name as the class, and can be used to set the values of the members
of an object, either to default or to user-defined values.
- logic involving specific operations that need to be executed
- other languages where objects typically have from one to dozens of methods,
classes require a special method (usually called "initialize") which describes how to
create or "construct" the object, and is automatically called when the object is created
- All object with have a constructor property. Objects created without the explicit use
of a constructor function (ie. the object and array literals) will have a constructor Property
that points to the Fundamental Object constructor type for that object.
var o = {};
o.constructor === Object; true

var o = new Object;
o.constructor === Object;  true

var a = new Array;
a.constructor === Array true

var a = new Number(3)

process.argv
^ this property returns an array containing the command line arguments passed when the Node.js process
was launched. The first element will be process.execPath. See process.argv0 if access to
the original value of argv[0] is needed. The second element will be the path to the JavaScriptfile being
executed. The remaining elements will be any additional command line arguments.
HERE IS AN EXAMPLE
process.argv.forEach((val, index) => {
  console.log('${index}: ${val}');
});

*/


var inquirer = require('inquirer');
inquirer.prompt([/* Pass your questions in here */]).then(answers => {
    // Use user feedback for... whatever!!
});

/* Activity 1?
Over the course of this assignment you are going to put together a function which uses constructors and user input to create and manage a team of players.

Start out by creating a constructor function called "Player" with the following properties and methods...

name: Property which contains the player's name
position: Property which holds the player's position
offense: Property which is a value between 1 and 10 to show how good this player is on offense
defense: Property which is a value between 1 and 10 to show how good this player is on defense
goodGame: Method which increases either the player's offense or defense property based upon a coinflip.
badGame: Method which decreases either the player's offense or defense property based upon a coinflip.
printStats: Method which prints all of the player's properties to the screen
Now create a program which allows the user to create 8 unique players; 5 starters and 3 subs. It should take as user input the name, position, offense, and defense of each player.

Once all of the players have been created, print their stats.

Once your code is functioning properly, move on to create a function called "playGame" which will be run after all of the players have been created and will do the following:

Run 5 times. Each time the function runs:
Two random numbers between 1 and 20 are rolled and compared against the starters' offensive and defensive stats
If the first number is lower than the sum of the team's offensive stat, add one point to the team's score.
If the second number is higher than the sum of the team's defensive stat, remove one point from the team's score.
After the score has been changed, prompt the user to allow them to substitute 1 player from within the starters array with 1 player from within the subs array.
After the game has finished (been run 5 times):
If the score is positive, run goodGame for all of the players currently within the starters array.
If the score is negative, run badGame for all of the players currently within the starters array.
If the score is equal to zero, do nothing with the starters.
Give the user a message about if they won, and the status of their starters.
After printing the results, ask the user if they would like to play again.
Run playGame from the start once more if they do.
End the program if they don't.
HINT: Remember to use recursion when looping with inquirer! Otherwise your program might not return the prompts as you expect.

HINT: It has been a while since we have worked with random numbers explicitly. If you are having troubles, look up Math.random on Google and you should find some resources to help.


*

/ use the var inquirer
define a print stats function
var createPlayer = function
function createPlayer(){
  has to do with hoisting, how things are interpreted into javascript of data in a different scope
}

if(starters.length + subs.length < 8) { //this is a base condition and you want to return asap instead of adding an else statement
  console.log("\nNEW PLAYER! /n");
  inquirer.prompt([
    {
      name: "name",
    }
  ])
}

//usually wont see recursive function with if else built into the statement like this solved solution
var createPlayer = function() {
  if (n === 8)
    return
    inquirer.prompt().then(() => { //what matters is what happens inside of THEN
      createPlayer(n+1)
    });
  };

implementation detail is something where it doesn't matter, so the stuff that determines how your program flows like conditional statements
 it's now how you accomplished the work its that you accomplished it

var starters = [];
var subs = [];
var team = [];

Part 1 "solved" below
*/
// dependency for inquirer npm package
var inquirer = require("inquirer");

// constructor function for creating player objects
function Player(name, position, offense, defense) {
  this.name = name;
  this.position = position;
  this.offense = offense;
  this.defense = defense;
  // flips a coin: if the the value is equal to 0 then this.offense goes up by one. if the value is equal to 1
  this.goodGame = function() {
    if (Math.floor(Math.random() * 2) === 0) {
      this.offense++;
      console.log(this.name + "'s offense has gone up!\n----------");
    }
    else {
      this.defense++;
      console.log(this.name + "'s defense has gone up!\n----------");
    }
  };
  this.badGame = function() {
    if (Math.floor(Math.random() * 2) === 0) {
      this.offense--;
      console.log(this.name + "'s offense has gone down!\n----------");
    }
    else {
      this.defense--;
      console.log(this.name + "'s defense has gone down!\n----------");
    }
  };
  this.printStats = function() {
    console.log("Name: " + this.name + "\nPosition: " + this.position +
    "\nOffense: " + this.offense + "\nDefense: " + this.defense + "\n----------");
  };
}

// arrays used to contain all of our player objects
var starters = [];
var subs = [];
var team = [];

// recursive function which will allow the user to create 5 players and then will print each player's stats afterwards
var createPlayer = function() {
  // if the length of the team array is 8 or higher, no more questions will be asked
  if (starters.length + subs.length < 8) {
    console.log("\nNEW PLAYER!\n");
    inquirer.prompt([
      {
        name: "name",
        message: "Player's Name: "
      }, {
        name: "position",
        message: "Player's position: "
      }, {
        name: "offense",
        message: "Player's Offensive Ability: ",
        validate: function(value) {
          if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
            return true;
          }
          return false;
        }
      }, {
        name: "defense",
        message: "Player's Defensive Ability: ",
        validate: function(value) {
          if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
            return true;
          }
          return false;
        }
      }
    ]).then(function(answers) {
      // runs the constructor and places the new player object into the variable player.
      // turns the offense and defense variables into integers as well with parseInt
      var player = new Player(answers.name, answers.position, parseInt(answers.offense), parseInt(answers.defense));
      // adds a player to the starters array if there are less than five player objects in it.
      // otherwise adds the newest player object to the subs array
      if (starters.length < 5) {
        starters.push(player);
        team.push(player);
        console.log(player.name + " added to the starters");
      }
      else {
        subs.push(player);
        team.push(player);
        console.log(player.name + " added to the subs");
      }
      // runs the createPlayer function once more
      createPlayer();
    });
  }
  else {
    // loops through the team array and calls printStats() for each object it contains
    for (var i = 0; i < team.length; i++) {
      team[i].printStats();
    }
  }
};

// calls the function createPlayer() to start the code
createPlayer();

/*
LAST Activity
- In this activity we are going to make two constructors in two different files in which one constructor calls upon the other within it.

- The first constructor function is called "Student" and has the following properties within it...*/
var student = []
this.name=name;
this.favoriteSubject= favorite subject;
this.currentGpa=currentGpa;
var student = function() {
 // - Name of the student
// - Favorite subject
//  - Current GPA

- The second constructor function is called "Class" and has the following properties within it...
var classSubject = []
this.numberOfStudents = numberOfStudents;
this.nameOfProfessor = nameOfProfessor;
this.roomNumber = roomNumber;

/* - An array of students within the class
  - Number of students in the class
  - Name of the professor
  - Room number
NO IDEA HOW TO DO THIS ONE  - The Student constructor function from above which adds a new student to the class
*/
