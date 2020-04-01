function darktheme()
{document.body.style.backgroundColor="#000"}
function lighttheme()
{document.body.style.backgroundColor="rgba(121, 68, 154, 0.13)"}
var text=document.getElementById("top");function button(){location.reload()}
var c={b1:!0,b2:!0,b3:!0,b4:!0,b5:!0,b6:!0,b7:!0,b8:!0,b9:!0,x1:!1,x2:!1,x3:!1,x4:!1,x5:!1,x6:!1,x7:!1,x8:!1,x9:!1,y1:!1,y2:!1,y3:!1,y4:!1,y5:!1,y6:!1,y7:!1,y8:!1,y9:!1,};var win=!0;var xturn=!0;var canvas=document.getElementById('c1');var ctx=canvas.getContext("2d");ctx.font="250px sans-serif";ctx.lineCap="round";ctx.strokeStyle="white";ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(200,0);ctx.lineTo(200,600);ctx.moveTo(400,0);ctx.lineTo(400,600);ctx.moveTo(0,200);ctx.lineTo(600,200);ctx.moveTo(0,400);ctx.lineTo(600,400);ctx.stroke();ctx.closePath();canvas.addEventListener('click',event=>{var rect=canvas.getBoundingClientRect();var x=event.clientX-rect.left;var y=event.clientY-rect.top;console.log(x,y);ctx.strokeStyle="red";if(win){if(x<=200&&y<=200){if(c.b1){if(xturn){ctx.strokeText("X",10,190);xturn=!1;c.x1=!0}
else{ctx.strokeText("O",10,190);xturn=!0;c.y1=!0}}
console.log("c 1");c.b1=!1}
else if(x<=400&&y<=200){if(c.b2){if(xturn){ctx.strokeText("X",210,190);xturn=!1;c.x2=!0}
else{ctx.strokeText("O",210,190);xturn=!0;c.y2=!0}}
console.log("c 2");c.b2=!1}
else if(x<=600&&y<=200){if(c.b3){if(xturn){ctx.strokeText("X",410,190);xturn=!1;c.x3=!0}
else{ctx.strokeText("O",410,190);xturn=!0;c.y3=!0}}
console.log("c 3");c.b3=!1}
else if(x<=200&&y<=400){if(c.b4){if(xturn){ctx.strokeText("X",10,390);xturn=!1;c.x4=!0}
else{ctx.strokeText("O",10,390);xturn=!0;c.y4=!0}}
console.log("c 4");c.b4=!1}
else if(x<=400&&y<=400){if(c.b5){if(xturn){ctx.strokeText("X",210,390)
xturn=!1;c.x5=!0}
else{ctx.strokeText("O",210,390);xturn=!0;c.y5=!0}}
console.log("c 5");c.b5=!1}
else if(x<=600&&y<=400){if(c.b6){if(xturn){ctx.strokeText("X",410,390);xturn=!1;c.x6=!0}
else{ctx.strokeText("O",410,390);xturn=!0;c.y6=!0}}
console.log("c 6");c.b6=!1}
else if(x<=200&&y<=600){if(c.b7){if(xturn){ctx.strokeText("X",10,590);xturn=!1;c.x7=!0}
else{ctx.strokeText("O",10,590);xturn=!0;c.y7=!0}}
console.log("c 7");c.b7=!1}
else if(x<=400&&y<=600){if(c.b8){if(xturn){ctx.strokeText("X",210,590);xturn=!1;c.x8=!0}
else{ctx.strokeText("O",210,590);xturn=!0;c.y8=!0}}
console.log("c 8");c.b8=!1}
else if(x<=600&&y<=600){if(c.b9){if(xturn){ctx.strokeText("X",410,590);xturn=!1;c.x9=!0}
else{ctx.strokeText("O",410,590);xturn=!0;c.y9=!0}}
console.log("c 9");c.b9=!1};if(c.x1&&c.x2&&c.x3||c.x4&&c.x5&&c.x6||c.x7&&c.x8&&c.x9||c.x1&&c.x4&&c.x7||c.x2&&c.x5&&c.x8||c.x3&&c.x6&&c.x9||c.x1&&c.x5&&c.x9||c.x3&&c.x5&&c.x7){text.innerHTML="X wins the game";win=!1};if(c.y1&&c.y2&&c.y3||c.y4&&c.y5&&c.y6||c.y7&&c.y8&&c.y9||c.y1&&c.y4&&c.y7||c.y2&&c.y5&&c.y8||c.y3&&c.y6&&c.y9||c.y1&&c.y5&&c.y9||c.y3&&c.y5&&c.y7){text.innerHTML="O wins the game";win=!1}}
if(c.b1===!1&&c.b2===!1&&c.b3===!1&&c.b4===!1&&c.b5===!1&&c.b6===!1&&c.b7===!1&&c.b8===!1&&c.b9===!1&&win===!0){text.innerHTML="!!!DRAW!!!";win=!1}})
