


window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		arrowX = width / 2,
		arrowY = height / 2,
		dx, dy,
        angle = 0,
        time = 0,
		a = 0;

	render();

	function render() {
        time++;
        //this code creates the path of this movment, currently it is making an illipse beacuse the x-axis is being mulitipled by .1 while the y-axis .5
		arrowX = width / 2 + Math.cos(a) * height * .1;
        arrowY = height / 2 + Math.sin(a) * height * .05;
        //var a sets the speed that the image moves along the track
        a += .045;

        //clears the screen
		context.clearRect(0, 0, width, height);

        //saves the position of the window
        context.save();
        //moves it to our location on the track
        context.translate(arrowX, arrowY);
        
		context.rotate(angle);

        //makes our image
           for (let i = 0; i < 1481; i++) {
            context.strokeStyle = 'hsl(' + (time ) + ', 100%, 80%)';
            context.beginPath();
            context.moveTo(0,0)
            context.lineTo(width - i,height+i);
            context.stroke();
            context.rotate(Math.PI/777)
        }
            
        context.restore();
    
        //loops through the process every frame
		requestAnimationFrame(render);
	}

    //this code will make the image rotate to your mouse position
    //try uncommenting it and play around with it
    // document.body.addEventListener("mousemove", function(event) {
	// 	dx = event.clientX - arrowX;
	// 	dy = event.clientY - arrowY;
	// 	angle = Math.atan2(dy, dx);
	// });


};