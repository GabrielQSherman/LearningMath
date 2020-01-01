window.onload = () => {

    const canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    width = canvas.width = innerWidth,
    height = canvas.height = innerHeight;

    let time = 100,
        angle = Math.PI / 1.5;

    ctx.strokeStyle = "white";
    ctx.translate(width/2, height);

    function createLine(x1,y1,x2,y2) {
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
    }

    function clear() {
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
    }

   
    function create_tree(angle, length) {

        ctx.strokeStyle = 'hsl(' + (length * 1) + ', 100%, 50%)';

        createLine(0,0,0,-length);

        ctx.translate(0, -length);
        length *= .45 + time / 10000;
    
        if(length > 7) { 
        ctx.save()
        ctx.rotate(angle)
        create_tree(angle, length); 

        ctx.restore()
        ///////////////
        
        //////////////
        ctx.save()
    
        ctx.rotate(-angle)
        create_tree(-angle, length);
        ctx.restore()
            
        }
     
    }

    //animate the tree
    let angleDirection = true;

    render()
        function render() {
            clear()
            
            time++;

            console.log(angle);

            if (angleDirection == true) {
                angle -= .009;
            } else {
                angle += .009;
            }

            if (angle < Math.PI / 7) {
                angleDirection = false;
            } else if (angle > Math.PI / 1.3) {
                angleDirection = true;
            }

            // console.log(time)

            ctx.save()
            create_tree(angle, 100 + time/5);
            ctx.restore()
            
            if (time > 2000) {
                time = 0;
                angle = Math.PI / 1.5;
                
            }
            
            // return
            
            setTimeout( window.requestAnimationFrame, 10, (render));
            
        }

}