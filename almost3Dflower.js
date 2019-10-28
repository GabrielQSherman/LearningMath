

window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;
       

   context.translate((width / 2), height /2);

var time = 0;
window.requestAnimationFrame(function loop() {
    time++;
    context.save();
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.restore();
    

  context.rotate(Math.PI / 10 );

for (let i = 0; i < 10000; i++) {
  
    context.strokeStyle = 'hsl(' + (time*5) + ', 80%, 30%)';
    context.beginPath();
    
    ////////////////////////////
    context.moveTo(i+10,0);

    context.lineTo(width-500,height-500);
    /////////////////////////////

    context.stroke();
   context.rotate(Math.PI/100)

   //context.strokeStyle = 'hsl(' + (time) + ', 80%, 50%)';
   context.beginPath();

   //////////////////////////////////
   context.moveTo(i,400);

   context.lineTo(100,height-1800);
   /////////////////////////////////

   context.stroke();
  context.rotate(.3)
   

}     
     
setTimeout(window.requestAnimationFrame,0, (loop));  
})      
}

