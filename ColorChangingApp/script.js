let color = ['red', 'blue', 'green', 'orange', 'purple', 'black'];

let button = document.getElementById('button');
button.addEventListener('click',function(){
    let index = parseInt((Math.random()*color.length)+1);

    canvas.style.background = `${color[index]}`;
})