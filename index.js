const app = "I don't do much."

function Shape(sides, x, y) {
  this.sides = sides
  this.x = x
  this.y = y
}

Shape.prototype.move = function(x,y) {
  this.x = x
  this.y = y
}

Shape.prototype.position = function() {
  return(this.x + ", " + this.y)
}

function Rectangle(x, y, width, height) {
  //call superclass constructor
  Shape.call(this, 4, x, y)
  //set rectangle values
  this.width = width
  this.height = height
}
// set Rectangle prototype to an instance of a Shape
Rectangle.prototype = Object.create(Shape.prototype)
// set Rectangle constructor
Rectangle.prototype.constructor = Rectangle

// extend with Rectangle behavior
Rectangle.prototype.area = function() {
  return this.width * this.height
}
Rectangle.prototype.perimeter = function () {
  return (this.width + this.height) * 2
}

rect.sides = 4
rect.x = 4
rect.y = 3
rect.width = 5
rect.height = 3
rect.constructor = function Rectangle(x, y, width, height) {
  //call superclass constructor
  Shape.call(this, 4, x, y);
  //set rectangle values
  this.width = width;
  this.height = height;
}
rect.area = function () {
  return this.width * this.height;
}
rect.perimeter = function () {
  return (this.width + this.height) * 2;
}
rect.move = function (x,y) {
  this.x = x;
  this.y = y;
  }
rect.position = function () {
  return(this.x + ", " + this.y);
}
