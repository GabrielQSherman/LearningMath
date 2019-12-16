window.onload = function() {
	const canvas_object = document.getElementById("canvas"),
		context = canvas_object.getContext("2d"),
		width = canvas_object.width = window.innerWidth,
    height = canvas_object.height = window.innerHeight;
       

   context.translate((width / 2), height /2);
    // context.save();
    // context.setTransform(1, 0, 0, 1, 0, 0);
    // context.clearRect(0, 0, canvas.width, canvas.height);
    // context.restore();

var time = 0;
window.requestAnimationFrame(function loop() {

    time++;
  


//back ground image

context.save()

context.rotate(Math.PI / 100 );

for (let i = 0; i < 100; i++) {
  
    context.strokeStyle = 'hsl(' + (40 * Math.random() + 20) + ', 100%, '+ ((Math.random() * 7000) / time ) +'%)';
    context.beginPath();
    ////////////////////////////
    context.moveTo((i * (Math.random() * 35)),100);

    context.lineTo(0,time);
    /////////////////////////////-
    context.stroke();
   context.rotate(Math.PI/21);
}

context.restore();

context.rotate(.01);

// context.







setTimeout(window.requestAnimationFrame,0, (loop))
})}

