

window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;
       

   context.translate((width / 2), height /2);

var time = 0;
window.requestAnimationFrame(function loop() {
    time++;
    // context.save();
    // context.setTransform(1, 0, 0, 1, 0, 0);
    // context.clearRect(0, 0, canvas.width, canvas.height);
    // context.restore();
    
  context.rotate(Math.PI / 100 );

for (let i = 0; i < 7; i++) {
  
    context.strokeStyle = 'hsl(' + (time ) + ', 80%, 50%)';
    context.beginPath();
    ////////////////////////////
    context.moveTo((i),77);

    context.lineTo(width,height);
    /////////////////////////////
    context.stroke();
   context.rotate(Math.PI/21)

   context.strokeStyle = 'hsl(' + (time ) + ', 80%, 50%)';
   context.beginPath();
   //////////////////////////////////
   context.moveTo(100,1000);
   context.lineTo(width,0);
   context.stroke();
  context.rotate(Math.PI/3.5)
   

}
   
   
     
     
setTimeout(window.requestAnimationFrame,0, (loop));  
})      
}

