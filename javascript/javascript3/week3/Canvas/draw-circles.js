console.log("loadeddd");
//USING JS
let canvas = document.getElementById("myCanvas");

let context = canvas.getContext("2d");

function drawSeveralCircles() {
    // Draw several circles
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 9; j++) {
            context.beginPath();
            let centerX = 35 + j * 50;
            let centerY = 35 + i * 50;
            let radius = 17;
            context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            context.fillStyle = "green";
            if (i >= 0) {
                context.fill();
            } else {
                context.lineWidth = 1;
                context.strokeStyle = "#003300";
                context.stroke();
            }
        }
    }
}
drawSeveralCircles();

// ONE CIRCLE
function drawOneCircle() {
    // Draw a single circle
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 17;

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = "orange";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "#003300";
    context.stroke();
}
drawOneCircle();

// USING CLASS
// const canvas = document.getElementById("myCanvas");
class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
        context.fillStyle = this.fillColor;
        context.fill();
        context.strokeStyle = "yellow";
        context.stroke();
    }
}

// CIRCLE INSTANCES
const circle1 = new Circle(50, 50, 17, 0, 2 * Math.PI, "#fff777");
const circle2 = new Circle(150, 100, 16, 0, 2 * Math.PI, "#000abc");
const circle3 = new Circle(100, 75, 15, 0, 2 * Math.PI, "#fffabc");

// circle1.draw();
// circle2.draw();
// circle3.draw();

//DRAWING A CIRCLE EVERY 1 SECOND
setInterval(() => {
    const circle = new Circle(
        Math.floor(Math.random() * context.canvas.width),
        Math.floor(Math.random() * context.canvas.height),
        Math.floor(Math.random() * 17),
        0,
        2 * Math.PI,
        "#" + Math.floor(Math.random() * 12345678).toString(16)
    );

    circle.draw();
}, 100);

// FOLLOW CURSOR MOVE
document.addEventListener("mousemove", (eve) => {
    let x = eve.x;
    let y = eve.y;
    const circleMove = new Circle(
        x,
        y,
        17,
        0,
        2 * Math.PI,
        "#" + Math.floor(Math.random() * 76543210).toString(16)
    );
    circleMove.draw();
});