window.onload = function () {
   var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = this.innerWidth, //this refers to window
        height = canvas.height = this.innerHeight,
        time = 0,
        size;

        context.strokeStyle = "white";

        context.translate(width/2, height/2);
        
        context.beginPath();
        context.moveTo(222, 222);

        for (let i = 0; i < 5; i++) {
                context.rotate(Math.PI / 3)
                context.lineTo(222, 222);

        }


        context.fillStyle = "pink";
        context.fill();

        // context.beginPath();
        // context.rect(20, 20, 150, 100);
        // context.fillStyle = "white";
        // context.fill();

}