
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

var time = 300;
window.requestAnimationFrame(function loop() {
  time++;
  for (let i = 0; i < 1000; i++) {
    context.strokeStyle = 'hsl(' + time*3 + ', 100%, 80%)';
    context.beginPath();
    context.moveTo(width+(i),height)     
    context.lineTo(1000,900);
    context.stroke();
    
}
  
  
    delete_this();
    function delete_this() {
      context.save();
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.restore();
      
    context.rotate(0.1);
  
  
  
  for (let i = 0; i < 200; i++) {
    
      context.strokeStyle = 'hsl(' + time * 5 + ', 100%, 35%)';
      context.beginPath();
      context.moveTo(i+100,-500);
      context.lineTo(50,5*i);
      context.rotate(.3);
      context.lineTo(0,500/i);
      context.stroke();
     context.rotate(.3)
  
  }
  
        for (let i = 0; i < 333; i++) {
                    context.strokeStyle = 'hsl(' + time*2 + ', 100%, 80%)';
                    context.beginPath();
                    context.moveTo(700-(i/200),700-(i/200))     
                    context.lineTo(1000+(i/200),900+(i/200));
                    context.rotate(.2)
                    context.lineTo(1000+(i/200),900+(i/200));
  
                    context.stroke();
                    
         }
  
  
  
    }
   

// (Math.random()* 360)  
   
     
     
setTimeout(window.requestAnimationFrame,30, (loop));  
})      
}

