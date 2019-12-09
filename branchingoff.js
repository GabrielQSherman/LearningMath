
window.onload = function () {

   var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = this.innerWidth, //this refers to window
        height = canvas.height = this.innerHeight,
        size = 0;

        context.strokeStyle = 'white';

        context.translate(width/2, height/2);
        // context.rotate((-15 * Math.PI) / 180);

        let originX = 0,
            originY = 0;

        //first stick

        function create_branch(size) {
            context.beginPath();

            context.moveTo(originX, originY + size));

            context.lineTo(originX, originY);



            context.stroke();
        }

        create_branch(100);

        //first leaf

        for (let i = 0; i < 101; i++) {
            context.save();
            
            context.beginPath();

            context.moveTo(100,0);

            context.lineTo((Math.sin(i) * 100) + 200, Math.cos(i) * 30);

            context.stroke();

            context.restore();
            
        }

        // for (let i = 0; i < 5; i++) {
        //     context.moveTo(100,0);

        //     context.save();

        //     context.rotate(Math.PI / 4);

        //     context.lineTo(200, 0);

        //     context.stroke();

        //     context.restore();
        // }

        // context.moveTo(100,0);

        // context.save();

        // context.rotate(Math.PI / 4);

        // context.lineTo(200, 0);

        // context.stroke();

        // context.restore();



    
        

}