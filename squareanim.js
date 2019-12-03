window.onload = function () {
   var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = this.innerWidth, //this refers to window
        height = canvas.height = this.innerHeight,
        time = 100;

        context.strokeStyle = "white";

        context.translate(width/2, height/2);
        

        function createSq(size) {
            context.beginPath();
            context.moveTo(size, size);

            for (let i = 0; i < 5; i++) {
                    context.rotate(Math.PI / 3);
                    context.lineTo(size, size);

            }

            context.stroke();
        }

        for (let i = 0; i < 10; i++) {
            time++

            
            for (let numOfObj = 0; numOfObj < 10; numOfObj++) {
                
                context.save()
                context.translate(width + (i * 50), height + (i * 50));
                // context.rotate(.1);
                createSq(time);
                context.restore
                
                
            }
            
        }

        function render() {
            time++


            for (let i = 0; i < 20; i++) {
            

                for (let numOfObj = 0; numOfObj < 10; numOfObj++) {
                    
                    context.save()
                    context.translate(width, height + (i * time));
                    // context.rotate(.1);
                    createSq(time);
                    context.restore
                    
                    
                }
            
            }

        }

        setTimeout( window.requestAnimationFrame , 100, render());

}