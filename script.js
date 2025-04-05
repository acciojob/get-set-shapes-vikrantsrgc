// 1. Rectangle Class
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate area
  getArea() {
    return this._width * this._height;
  }
}

// 2. Square Class (inherits from Rectangle)
class Square extends Rectangle {
  constructor(side) {
    super(side, side); // Set width and height to side
  }

  // Method to calculate perimeter
  getPerimeter() {
    return this.width * 4;
  }
}


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
