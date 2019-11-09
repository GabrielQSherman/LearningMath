

window.onload = function () {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = this.innerWidth, //this refers to window
        height = canvas.height = this.innerHeight,
        time = 0;


        // context.translate(width / 2, height / 2);
       

        function createSquare(p1,p2,p3,p4) {
            context.beginPath()
            context.moveTo(p1.x, p1.y);
            context.lineTo(p2.x, p2.y);
             context.strokeStyle = "white";
              context.stroke();

             context.beginPath()
            context.moveTo(p2.x, p2.y);
            context.lineTo(p3.x, p3.y);
             context.strokeStyle = "blue";
              context.stroke();

             context.beginPath()
            context.moveTo(p3.x, p3.y);
            context.lineTo(p4.x, p4.y);
             context.strokeStyle = "red";
              context.stroke();

             context.beginPath()
            context.moveTo(p4.x, p4.y);
            context.lineTo(p1.x, p1.y);
             context.strokeStyle = "yellow";
              context.stroke();
    
            
        }
        
    render();




        ///////////////////////////////////////////////////////////////////        ///////////////////////////////////////////////////////////////////        ///////////////////////////////////////////////////////////////////

        function render() {
        time++;

         var p1 = {
            x: width -100,
            y: height -100,
        },
            p2 = {
            x: 100,
            y: height -100,
        },
            p3 = {
            x: 100,
            y: 100,
        },
            p4 = {
            x: width -100,
            y: 100,
        };

        createSquare(p1,p2,p3,p4)

        function createGrid(p1,p2,p3,p4) {
        p1 = {
            x: p1.x * time,
            y: p1.y * time,
        },
        p2 = {
            x: p2.x * time,
            y: p2.y * time,
        },
        p3 = {
            x: p3.x * time,
            y: p3.y * time,
        },
        p4 = {
            x: p4.x * time,
            y: p4.y * time,
        };
        createSquare(p1,p2,p3,p4);

        };
        createGrid(p1,p2,p3,p4);
          
        requestAnimationFrame(render);
    }//end of render

        ///////////////////////////////////////////////////////////////////        ///////////////////////////////////////////////////////////////////        ///////////////////////////////////////////////////////////////////


        
};//end of window onload