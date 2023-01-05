//"Bygg en app som ändrar färg när du trycker på en knapp"

//1. div 
//2. button
//3. eventlistener
//4. hämta canvas

let colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'yellow'];

let button = document.getElementById('button');

button.addEventListener('click', function(){

let index = parseInt((Math.random()*colors.length)-1);

//let index = Math.floor ((Math.random ()*colors.length -1));

let canvas = document.getElementById('canvas');
canvas.style.background =`${colors[index]}`
})

