window.onload = function () {
  var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;
   
for(var i = 0; i < 3333; i++){
    context.beginPath();
    context.moveTo(Math.random() * width, Math.random() * height);
    context.lineTo(Math.random() * width, Math.random() * height);
    context.strokeStyle = 'hsl(' + 360 * Math.random() + ', 100%, 60%)';
    context.stroke();
}

};