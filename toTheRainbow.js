// window.onload = function() {
// 	var canvas = document.getElementById("canvas"),
// 		context = canvas.getContext("2d"),
// 		width = canvas.width = window.innerWidth,
//         height = canvas.height = window.innerHeight;
       
//         context.fillStyle = "black";
//         context.fillRect(0,0,width,height);

//          context.translate((width / 2), height /2);

//          window.requestAnimationFrame( function light() {
            
//             for (let i = 0; i < 3333; i++) {
//                 context.strokeStyle = 'hsl(' + 360 * Math.random() + ', 50%, 70%)';
//                 context.beginPath();
//                 context.moveTo(0,0)
//                 context.lineTo(width - i,height+i);
//                 context.stroke();
//                 context.rotate(Math.PI/777)
//             }
//          })
            



// };

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
    
  context.rotate(Math.PI / 877 );

for (let i = 0; i < 20; i++) {
  
    context.strokeStyle = 'hsl(' + time + ', 100%, 77%)';
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(width,height);
    context.stroke();
   context.rotate(Math.PI/3.5)

}
   
   
     
     
setTimeout(window.requestAnimationFrame,0, (loop));  
})      
}

