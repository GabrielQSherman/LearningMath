

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

for (let i = 0; i < 1000; i++) {
  
    context.strokeStyle = 'hsl(' + (time) + ', 80%, 50%)';
    context.beginPath();
    
    ////////////////////////////
    context.moveTo(i+100,0);

    context.lineTo(width,height);
    /////////////////////////////

    context.stroke();
   context.rotate(Math.PI/1000)

   //context.strokeStyle = 'hsl(' + (time) + ', 80%, 50%)';
   context.beginPath();

   //////////////////////////////////
   context.moveTo(100,1000);

   context.lineTo(width,0);
   /////////////////////////////////

   context.stroke();
  context.rotate(Math.PI/3.5)
   

}



for (let i = 0; i < 777; i++) {
  
  //context.strokeStyle = 'hsl(' + (time) + ', 70%, 50%)';
  context.beginPath();
  
  ////////////////////////////
  context.moveTo(i,900);

  context.lineTo(width,height);
  /////////////////////////////

  context.stroke();
 context.rotate(-Math.PI/10)

 context.strokeStyle = 'hsl(' + (time*2.5) + ', 70%, 50%)';
 context.beginPath();

 //////////////////////////////////
 context.moveTo(100,1000);

 context.lineTo(width,0);
 /////////////////////////////////

 context.stroke();
context.rotate(-Math.PI/.5)
 

}
   
   
     
     
setTimeout(window.requestAnimationFrame,0, (loop));  
})      
}

