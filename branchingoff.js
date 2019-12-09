
window.onload = function () {

   var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = this.innerWidth, //this refers to window
        height = canvas.height = this.innerHeight,
        size = 0;

        context.strokeStyle = 'white';


        //setting up the canvas so the image looks good
        context.translate(width/2, 100);
        context.rotate(Math.PI);

        //the 'tree' will start at the center of the canvas
        let originX = 0,
            originY = 0;

        //function that creates a tree branch (one vertical, two horiz) and calls the leaf creating function for the horizontal branches
        function create_branch(size) {

            context.translate(0,-size);

            for (let i = 0; i < 3; i++) {

                context.save();

                context.rotate(((90 * i - 90) * (Math.PI/180)));

                context.beginPath();
                
                context.moveTo(originX, originY + size);

                context.lineTo(originX, originY);

                context.stroke();

                if (i != 1) {
                    create_leaf(originX, originY, size);
                }

                context.restore();
                
            }
        }


        //first leaf

        function create_leaf(x,y, leafSize) {

            context.rotate(90 * (Math.PI / 180));

             for (let i = 0; i < 20; i++) {

                 context.strokeStyle = 'hsl(' + 150 + (i * 20) + ', 100%, 80%)';

            context.save();
            
            context.beginPath();

            context.moveTo(x + leafSize, y);

            context.lineTo((Math.sin(i) * leafSize) + leafSize * 2, Math.cos(i) * (leafSize/ 3));

            context.stroke();

            context.restore();
            
         }
            
        }


        //for loop that creates the 
        for (let i = 10; i < 400; i+=15) {
           
           create_branch(i);
        //    create_branch((i + (i+30))/2)
            
        }

        
       


}