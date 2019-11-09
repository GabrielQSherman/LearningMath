window.onload = function () {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = this.innerWidth, //this refers to window
        height = canvas.height = this.innerHeight,
        time = 0;


        // context.translate(width / 2, height / 2);
        context.strokeStyle = "white";

        function createSquare(p1,p2,p3,p4) {
            context.beginPath()
            context.moveTo(p1.x, p1.y);
            context.lineTo(p2.x, p2.y);
            context.lineTo(p3.x, p3.y);
            context.lineTo(p4.x, p4.y);
            context.lineTo(p1.x, p1.y);
            context.stroke();
            
        }
        
    render();

    
    function render() {
        time++

        // var     pA = {
        //             x: (p4.x + p1.x) / 2,
        //             y: (p4.y + p1.y) / 2
        //         },
        //         pB = {
        //             x: (p1.x + p2.x) / 2,
        //             y: (p1.y + p2.y) / 2
        //         }, 
        //         pC = {
        //             x: (p2.x + p3.x) / 2,
        //             y: (p2.y + p3.y) / 2
        //         };
        //          pD = {
        //             x: (p3.x + p4.x) / 2,
        //             y: (p3.y + p4.y) / 2
        //         };
                
    
        //     } 
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

        requestAnimationFrame(render);
    }

};