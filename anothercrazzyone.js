
window.onload = function () {

   var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = this.innerWidth, //this refers to window
        height = canvas.height = this.innerHeight,
        time = 0;

        context.strokeStyle = 'white';

        context.translate(width/2, height/2);
        context.rotate((-15 * Math.PI) / 180);


        // context.beginPath();

        //         context.moveTo(100, 100);

        //         context.rotate((120 * Math.PI)/180);

        //         context.lineTo(100, 100);

        //         context.stroke();
                




        // function createTri(sizeLength) {
            
        //     for (let i = 0; i < 3; i++) {
        //         context.beginPath();

        //         context.moveTo(sizeLength, sizeLength);

        //         context.rotate((120 * Math.PI)/180);

        //         context.lineTo(sizeLength, sizeLength);

        //         context.stroke();
                
        //     }
        // }
        

        // function createCircle(radius) {

        //     for (let i = 0; i < 36; i++) {
        //         context.beginPath();

        //         context.moveTo(radius, radius);

        //         context.rotate((10 * Math.PI)/180);

        //         context.lineTo(radius, radius);

        //         context.stroke()
                
        //     }
            
        // }


        // createSpiral(200);

        function createSpiral(maxSize, fibRotations) {
            context.beginPath();

            for (let i = 0; i < fibRotations; i++) {
                
                

                context.moveTo(maxSize,maxSize);
                context.rotate(fibRotations);
                context.lineTo(maxSize+i,maxSize+i);
                context.stroke();
            }
            
        }

        // var size = 30;



        // createSpiral(400,3)



        render()

        function render() {
            time++;
            
            // context.save();
            // context.setTransform(1, 0, 0, 1, 0, 0);
            // context.clearRect(0, 0, canvas.width, canvas.height);
            // context.restore();

            context.strokeStyle = 'hsl(' + (time * 4) + ', 100%, 70%)';

            curDeg = time / 1000;

            // createSpiral(100, .01);

            createSpiral(time, curDeg);

            // context.rotate(.2);

            setTimeout( window.requestAnimationFrame, 20, (render));

        }

    
        

}