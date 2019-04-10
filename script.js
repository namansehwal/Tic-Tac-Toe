
// let var
window.onload = function (){
var num;
var box;
var ctx;
var turn=1;
var filled;
var symbol;
var winner;
var gameOver = false;
filled = [false,false,false,false,false,false,false,false,false];
symbol = ['', '', '', '', '', '', '', '', ''];
winner = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

//new game function
var n = document.getElementById("new");
n.addEventListener("click", newGame);

 
//canvas event
var hola = document.getElementById("tic");
hola.addEventListener("click", fun);
function fun(e){
		boxClick(e.target.id);
}

function boxClick(numId) {
	box= document.getElementById(numId);
	ctx = box.getContext("2d");

	switch(numId) {
		case "c1": num = 1;
		           break;
		case "c2": num = 2;
		           break;
		case "c3": num = 3;
		           break;
        case "c4": num = 4;
		           break;   
        case "c5": num = 5;
		           break;
        case "c6": num = 6;
		           break;
		case "c7": num = 7;
		           break;
		case "c8": num = 8;
		           break;
		case "c9": num = 9;
		           break;                                 

  }
    //drawing shape in canvas
    if (filled[num-1] == false) {
    if (gameover == false) {
         if(turn%2 != 0){
         	ctx.beginPath();
         	ctx.lineTo(20,20);
         	ctx.moveTo(130,130);
         	ctx.lineTo(130,20);
         	ctx.moveTo(20,130);
         	ctx.strokeStyle ="dodgerblue";
         	ctx.stroke();
         	ctx.closePath();
         	symbol[num-1] = "x";

         }
         else{
              ctx.beginPath();
              ctx.arc(75,75,60,0,2 * Math.PI, false);
              ctx.strokeStyle ="dodgerblue";
              ctx.stroke();
              ctx.closePath();
              symbol[num-1] = "o";

         }
         turn++;
         filled[num-1] = true;
               
    }
    else{

    }

   } 
   else{

   }


