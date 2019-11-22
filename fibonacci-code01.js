window.onload = function () {
     var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = this.innerWidth, //this refers to window
        height = canvas.height = this.innerHeight,
        time = 0;



    context.translate(width / 2, height / 2);
    context.strokeStyle = "black";
        
// let fibSequence = [], curfibNum = 1, prevFibnum = 0;
//                 for (let i = 0; i < num; i++) {
//                     if (prevFibnum + curfibNum > num) {
//                         fibSequence.push(curfibNum);
//                         i = num;
//                     } else {
//                         fibSequence.push(curfibNum);
//                         curfibNum = prevFibnum + curfibNum;
//                         prevFibnum = fibSequence[i];




    var fibonacci = 0,
    prv = 0
    next = .1;

    render();
    function render() {
    var fibonacci = (prv + next),
        prv = next,
        next = fibonacci,
        circley = Math.sin(time),
        circlex = Math.cos(time),
        fibSprialx = Math.sin(time) * 10000,
        fibSprialy = Math.cos(time) * 10000;

        logx = Math


        time++

        context.beginPath();
        context.moveTo(fibSprialx,fibSprialy);
        context.lineTo(0,0);
        context.strokeStyle = "orange";
        context.stroke();


        // context.beginPath();
        // context.moveTo(circlex * 1000,circley * 1000);
        // context.lineTo(time,time);
        // context.strokeStyle = "orange";
        // context.stroke();


        // context.beginPath();
        // context.moveTo(0,fibonacci);
        // context.lineTo(fibonacci,0);
        // context.strokeStyle = "orange";
        // context.stroke();
       

        requestAnimationFrame(render);
    }

}