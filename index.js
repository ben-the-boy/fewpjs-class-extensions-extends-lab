// Your code here
class Polygon {
  constructor(sideLengths) {
    this.sideLengths = sideLengths;
  }

  get countSides() {
    return this.sideLengths.length;
  }

  get perimeter() {
    return this.sideLengths.reduce(function(memo, i) {
      return memo + i;
    })
  }
}

class Triangle extends Polygon {
  get isValid() {
    return (this.sideLengths[0] + this.sideLengths[1] > this.sideLengths[2]) &&
    (this.sideLengths[1] + this.sideLengths[2] > this.sideLengths[0]) &&
    (this.sideLengths[0] + this.sideLengths[2] > this.sideLengths[1])
  }
}

class Square extends Polygon {
  get isValid() {
    return (this.sideLengths[0] === this.sideLengths[1]) && (this.sideLengths[1] ===
    this.sideLengths[2]) && (this.sideLengths[2] === this.sideLengths[3])
  }

  get area() {
    return this.sideLengths[0] ** 2
  }
}
