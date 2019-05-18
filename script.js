//Background Color
function darktheme()
{   
document.body.style.backgroundColor= "#000";
}
function lighttheme()
{
	document.body.style.backgroundColor="rgba(121, 68, 154, 0.13)";
}

var text = document.getElementById("top");

function button(){
	location.reload();
}
// drawing
var c = {
  b1: true,
  b2: true,
  b3: true,
  b4: true,
  b5: true,
  b6: true,
  b7: true,
  b8: true,
  b9: true,


  x1: false,
  x2: false,
  x3: false,
  x4: false,
  x5: false,
  x6: false,
  x7: false,
  x8: false,
  x9: false,

  y1: false,
  y2: false,
  y3: false,
  y4: false,
  y5: false,
  y6: false,
  y7: false,
  y8: false,
  y9: false,
};

var win = true;
var xturn = true;
var canvas = document.getElementById('c1');
var ctx = canvas.getContext("2d");
ctx.font = "250px sans-serif"; 
ctx.lineCap ="round";
ctx.strokeStyle ="white";
ctx.lineWidth = 3;

ctx.beginPath();
ctx.moveTo(200,0);
ctx.lineTo(200,600);
ctx.moveTo(400,0);
ctx.lineTo(400,600);
ctx.moveTo(0,200);
ctx.lineTo(600,200);
ctx.moveTo(0,400);
ctx.lineTo(600,400);
ctx.stroke();
ctx.closePath();


// click event
canvas.addEventListener('click', event =>
{
	var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    console.log(x,y);
ctx.strokeStyle ="red";
if (win) {
	if (x <=200 && y <=200) {
      
        if ( c.b1) {
              if (xturn) {//draw X
 	          ctx.strokeText("X", 10, 190);
               xturn = false;
               c.x1 = true;

                            }

                    else {//draw O
                    	ctx.strokeText("O", 10, 190);
                         xturn = true;
                         c.y1 = true;
                        }}
	

 	 console.log("c 1");
     c.b1 = false;

} 



 else if (x <=400 && y <=200) {
         if (c.b2) {
         	if (xturn) { //draw X
 	    ctx.strokeText("X", 210, 190);
 	xturn = false;
 	c.x2 = true;
}
 	        else {//draw O
                ctx.strokeText("O", 210, 190);
            xturn = true;
            c.y2 = true;}
         }
        
                 console.log("c 2");
                   c.b2 = false; 
 }

 else if (x <=600 && y <=200 ) {
 	      if (c.b3) {
 	      	 if (xturn) { //draw X
 	    ctx.strokeText("X", 410, 190);
 	xturn = false;
 	c.x3 = true;
}
 	        else{//draw O
            ctx.strokeText("O", 410, 190);
        xturn = true;
        c.y3 = true;}
 	      }
 	     
             console.log("c 3");
             c.b3 = false;
 }
 else if (x <=200 && y <=400) {
 	      if (c.b4) {
 	      	if (xturn) { //draw X
 	      ctx.strokeText("X", 10, 390);
 	  xturn = false;
 	  c.x4 = true;
}
 	        else {//draw O
                ctx.strokeText("O", 10, 390);
            xturn = true;
            c.y4 = true;}
 	      }
 	      
                 console.log("c 4");
                 c.b4 = false;
 }
 else if (x <=400 && y <=400 ) {
 	      if (c.b5) {
 	      	if (xturn) { //draw X
 	      ctx.strokeText("X", 210, 390)
 	      xturn = false;
 	      c.x5 = true;
;   }
 	        else {//draw O
                ctx.strokeText("O", 210, 390);
            xturn = true;
            c.y5 = true;}
 	      }
 	      
       console.log("c 5");
       c.b5 = false;
 }
 else if (x <=600 && y <=400 ) {
 	     if (c.b6) {
 	     	if (xturn) { //draw X
 	      ctx.strokeText("X", 410, 390);  
 	      xturn = false;
 	      c.x6 = true;
 }
 	        else {//draw O
                ctx.strokeText("O", 410, 390);
            xturn = true;
            c.y6 = true;}
 	     }
 	     
       console.log("c 6");
       c.b6 = false;
 }
 else if (x <=200 && y <=600) {
           if (c.b7) {
           	if (xturn) { //draw X
 	      ctx.strokeText("X", 10, 590); 
 	      xturn = false;
 	      c.x7 = true;
  }
 	        else {//draw O
                ctx.strokeText("O", 10, 590);
            xturn = true;
            c.y7 = true;}
           } 	
 	       
       console.log("c 7");
       c.b7 = false;
 }
 else if (x <=400 && y <=600 ) {
 	          if (c.b8) {
 	          	if (xturn) { //draw X
 	      ctx.strokeText("X", 210, 590); 
 	      xturn = false;
 	      c.x8 = true;
  }
 	        else {//draw O
                ctx.strokeText("O", 210, 590);
            xturn = true;
            c.y8 = true;}
 	          }
 	      
       console.log("c 8");
       c.b8 = false;
 }
 else if (x <=600 && y <=600) {
 	       if (c.b9) {
 	       	if (xturn) { //draw X
 	      ctx.strokeText("X", 410, 590); 
 	      xturn = false;
 	      c.x9 = true;
  }
 	        else {//draw O
                ctx.strokeText("O", 410, 590);
            xturn = true;
            c.y9 = true;}
 	       }
 	       
       console.log("c 9");
       c.b9 = false;
 };

if (c.x1 && c.x2 && c.x3 ||
     c.x4 && c.x5 && c.x6 ||
     c.x7 && c.x8 && c.x9 ||

     c.x1 && c.x4 && c.x7 ||
     c.x2 && c.x5 && c.x8 ||
     c.x3 && c.x6 && c.x9 ||

     c.x1 && c.x5 && c.x9 ||
     c.x3 && c.x5 && c.x7
  ) {
      
  text.innerHTML = "X wins the game";
  win = false;
};  
if (c.y1 && c.y2 && c.y3 ||
     c.y4 && c.y5 && c.y6 ||
     c.y7 && c.y8 && c.y9 ||

     c.y1 && c.y4 && c.y7 ||
     c.y2 && c.y5 && c.y8 ||
     c.y3 && c.y6 && c.y9 ||

     c.y1 && c.y5 && c.y9 ||
     c.y3 && c.y5 && c.y7
  ) {
      
  text.innerHTML = "O wins the game";
  win = false;
};
}


 
});



