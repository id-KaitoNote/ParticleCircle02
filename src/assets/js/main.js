'use strict';

const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;

if (window.matchMedia('(max-width: 930px)').matches) {
    canvas.height = 500;
} else if (window.matchMedia('(min-width:931px)').matches) {
    canvas.height = window.innerHeight;
}

var c = canvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined,
};

var colorArray = ["#E61030", "#CF198F", "#DB7600", "#930FDB"];

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    };

    this.update = function () {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        if (
            mouse.x - this.x < 50 &&
            mouse.x - this.x > -50 &&
            mouse.y - this.y < 50 &&
            mouse.y - this.y > -50
        ) {
            if (this.radius < maxRadius) {
                this.radius += 1;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    };
}

var circleArray = [];

for (var i = 0; i < 6; i++) {
    var x = Math.random() * (canvas.width - radius * 2) + radius;
    var y = Math.random() * (canvas.height - radius * 2) + radius;
    var dx = Math.random() - 5;
    var dy = Math.random() - 5;
    var radius = 100;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {

    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerWidth);
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }

}

animate();



// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;
// var dx = (Math.random() - 0.5) * 8;
// var dy = (Math.random() - 0.5) * 8;
// var radius = 30;
// var cirleArray = [];

// function animate() {

//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight);

//     for (var i = 0; 5; i++) {

//         c.beginPath();
//         c.arc(x, y, 30, 0, Math.PI * 2, false);
//         c.strokeStyle = 'blue';
//         c.stroke();

//     }


//     if (x + radius > innerWidth || x - radius < 0) {
//         dx = -dx;
//     }
//     if (y + radius > innerHeight || y - radius < 0) {
//         dy = -dy;
//     }

//     x += dx;
//     y += dy;

// }

// animate();