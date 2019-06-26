### File

* _None_

### Instructions

* With a partner, spend a few moments outlining all the steps and conditions that go into a single game of rock paper scissors.

* Try to break it down into steps that you could code out.

* Think of basic elements like loops, if-else statements, arrays, alerts, etc.

* Be prepared to share your outlines approach.


First we need to build the game state object. 
we first write a page with a start button in the middle. and a reset button somewhere.
on button press for the start we change the view to display the game board.
an object is created with a random flip of either Rock -0 paper -1 or scissors -2 for the computer
we change the display for 3 option buttons to make them visable
user selects an option between 0 1 or 2 

if user input is == to computer input stalemate condition causes re roll.

if user selects 0 and computer selects 1 the computer wins increase the score in the game state object 
if the user selects 1 and the  computer selects 2 computer wins increase computer score by one
if user selects 2 and the computer selects 0 computer wins increase score by one
else increase user score by 1

if computer score or user score == 3 set win state.

