// img

var img = new Image (600, 600);
// img.src ="http://humor.fm/uploads/posts/2016-03/09/gmrqhqfk3ie.jpg"; img

// var baby = document.querySelector('body'); 
// baby.appendChild(img);

// var img = document.createElement('img')

// lazyload

// $("img").lazyload(); 

// $("img").lazyload({ threshold : 2000 }); 

// svg

// canvas

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// function drawPixel(x, y) 
// {
// 	ctx.beginPath();
// 	ctx.moveTo(x,y);
// 	ctx.lineTo(x+1,y+1);
// 	ctx.stroke();
// }

// drawPixel(150, 150);

// function drawLine(x1, y1, x2, y2) 
// {
// 	ctx.beginPath();
// 	ctx.moveTo(x1,y1);
// 	ctx.lineTo(x2,y2);
// 	ctx.stroke();
// }

// drawLine(200, 200, 300, 300);

// function drawTriangle(x1, y1, x2, y2, x3, y3) 
// {
// 	ctx.beginPath();
// 	ctx.moveTo(x1,y1);
// 	ctx.lineTo(x2,y2);
// 	ctx.lineTo(x3,y3);
// 	ctx.lineTo(x1,y1);
// 	ctx.stroke();
// }

// drawTriangle(50, 50, 250, 50, 270, 150);


function drawRect(x1, y1, width, height) {
	ctx.fillRect (x1, y1, width, height)
}

drawRect(50, 50, 300, 300);

