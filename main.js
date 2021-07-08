canas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="grey";
ctx.linewidth=4;
ctx.rect(150,143,430,200);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="blue";
ctx.linewidth=5;
ctx.rect(250,210,40,0,2*MathPi);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.linewidth=5;
ctx.rect(330,210,40,0,2*MathPi);
ctx.stroke();