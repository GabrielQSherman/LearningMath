
window.onload = function () {

   var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = this.innerWidth, //this refers to window
        height = canvas.height = this.innerHeight,
        time = 0,
        multFactor = 100;

        context.strokeStyle = 'white';

        context.translate(width/2, height/2);
        context.rotate((-42.9 * Math.PI) / 180);


        function createFibSpi(sizeLength, spinFactor) {
            

            let prevSL = sizeLength/100,
                curSL = sizeLength/3;

                context.save()
            
                context.beginPath();

                context.rotate(.001);

                context.rotate(-sizeLength/spinFactor * 2);

                curSL = curSL + prevSL;

                context.moveTo(curSL+20, curSL-4);

                context.lineTo(curSL, curSL);

                context.stroke();
                context.restore();


                context.save();
                context.beginPath();

                context.rotate(-.001);

                context.rotate(sizeLength/spinFactor * 2);

                curSL = curSL + prevSL;

                context.moveTo(-curSL+20, -curSL-4);

                context.lineTo(-curSL, -curSL);

                context.stroke();
                context.restore();

                
                
            context.strokeStyle = 'hsl(' + (sizeLength / 3) + ', 100%, 65%)';
        }
    

        render()

        function render() {
            time += .2;

            
    
            // createFibSpi(time);
            // createFibSpi(-time);

            for (let i = 1; i < multFactor; i++) {
               createFibSpi(time * Math.pow(i, 1.01), multFactor*3)
                
            }
            

            if (time > 240) {

                // context.save();
                // context.setTransform(1, 0, 0, 1, 0, 0);
                // context.clearRect(0, 0, canvas.width, canvas.height);
                // context.restore();

                // multFactor+=10;

                // time = 0;
                
            } else {
                 setTimeout( window.requestAnimationFrame, 0, (render));
            }


           

        }

        


        

}