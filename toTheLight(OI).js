window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;
       
        context.fillStyle = "black";
        context.fillRect(0,0,width,height);

      //  context.translate((width / 2), height /2);

            for (let i = 0; i < 333; i++) {
                context.strokeStyle = "white";
                context.beginPath();
                context.moveTo(0,0)
                context.lineTo(width - i,height+i);
                context.stroke();
                context.rotate(Math.PI/777)
            }



};