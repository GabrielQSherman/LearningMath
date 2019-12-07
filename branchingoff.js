
window.onload = function () {

   var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = this.innerWidth, //this refers to window
        height = canvas.height = this.innerHeight,
        size = 0;

        context.strokeStyle = 'white';

        context.translate(width/2, height/2);
        // context.rotate((-15 * Math.PI) / 180);

        //first stick

        context.beginPath();

        context.moveTo(0,0);

        context.lineTo(100,0);

        context.stroke();

        //first branch

        for (let i = 0; i < 5; i++) {
            context.moveTo(100,0);

            context.save();

            context.rotate(Math.PI / i);

            context.lineTo(200, 0);

            context.stroke();

            context.restore();
        }

        // context.moveTo(100,0);

        // context.save();

        // context.rotate(Math.PI / 4);

        // context.lineTo(200, 0);

        // context.stroke();

        // context.restore();



    
        

}