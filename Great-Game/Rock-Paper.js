let game = ["Rock", "Paper", "Scissors"];
let player = prompt("Choose between Rock/Paper/Scissors:  ").toLowerCase();
//console.log("Player Selection:",player);

let selectionIndex = Math.floor(Math.random() * game.length);
let selection = game[selectionIndex].toLowerCase();
//console.log("System Selection:", selection);

if(player === selection) {
   console.log("The game is a draw.")}
else if(player === "rock" && selection === "scissors"){
   console.log("Player won")}
else if(player === "scissors" && selection === "paper"){
   console.log("Player won")}
else if( player === "paper" && selection === "rock"){
   console.log("Player won")}
else if(selection === "rock" && player === "scissors"){
   console.log("computer won")}
else if(selection === "scissors" && player === "paper"){
   console.log("computer won")}
else if(selection === "paper" && player === "rock"){
   console.log("computer won")}
/*else if(selection == rock && player == )*/
else{
console.log("Enter valid input");}
