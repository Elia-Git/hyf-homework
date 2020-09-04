class Circle {
    constructor(radius) {
            this.radius = radius;
        }
        // Get diameter
    getDiameter() {
        const diameter = 2 * this.radius.toFixed(2);
        console.log(diameter);
    }
    getCircumference() {
        const circumference = 2 * Math.PI * this.radius;
        console.log(circumference.toFixed(2));
    }
    getArea() {
        const area = Math.PI * this.radius * this.radius;
        console.log(area.toFixed(2));
    }
}
const circle = new Circle(7);

circle.getDiameter(); // 14
circle.getCircumference(); //43.98
circle.getArea(); //153.94