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


window.requestAnimationFrame(function spin() {
    // context.save();
    // context.setTransform(1, 0, 0, 1, 0, 0);
    // context.clearRect(0, 0, canvas.width, canvas.height);
    // context.restore();
    
    context.rotate(Math.PI / 1000 );


    for (let i = 0; i < 777; i++) {
                        context.strokeStyle = 'hsl(' + ((220 * Math.random()) + 20) + ', 100%, 50%)';
                        context.beginPath();
                        context.moveTo(0,0)
                        context.lineTo(width - i,height+i);
                        context.stroke();
                       context.rotate(Math.PI/777)
                    }
   
     
     
setTimeout(window.requestAnimationFrame,100, (spin));  
})      
}

