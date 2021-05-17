//@include "../lib/numerical.jsx";

/**
 * # Point - A JavaScript 2D point class with methods for common vector operations
 */

/**
 * Constructor.
 *
 * ### Examples:
 *     var point1 = new Point(100, 50);
 *
 * @param {Number} x Value of the x coordinate
 * @param {Number} y Value of the y coordinate
 * @return {Point}
 * @api public
 */
function Point(x, y) {
  /**
   * The X coordinate
   *
   * ### Examples:
   *     var point = new Point(42, 21);
   *
   *     point.x;
   *     // => 42
   *
   * @api public
   */
  this.x = x || 0;

  /**
   * The Y coordinate
   *
   * ### Examples:
   *     var point = new Point(42, 21);
   *
   *     point.y;
   *     // => 21
   *
   * @api public
   */
  this.y = y || 0;
}

/**
 * # Manipulation
 *
 * These functions are chainable.
 */

Point.prototype = {
  /**
   * Adds another vector to this one
   *
   * ### Examples:
   *     var point1 = new Point(10, 10);
   *     var point = new Point(20, 30);
   *
   *     point1.add(point);
   *     point1.toString();
   *     // => x:30, y:40
   *
   * @param {Point} vector The other vector you want to add to this one
   * @return {Point} `this` for chaining capabilities
   * @api public
   */
  add: function (point) {
    this.x += point.x;
    this.y += point.y;
    return this;
  },

  /**
   * Sets the x and y coordinates of the point
   *
   * ### Examples:
   *     var point = new Point();
   *     point.set(10, 10);
   *
   *     point1.toString();
   *     // => x:10, y:10
   *
   * @param {Number} x
   * @param {Number} y
   * @return {Point} `this` for chaining capabilities
   * @api public
   */
  set: function (x, y) {
    this.x = x;
    this.y = y;
    return this;
  },

  /**
   * Adds the given number to both point coordinates
   *
   * ### Examples:
   *     var point = new Point(1, 2);
   *
   *     point.addNum(2);
   *     point.toString();
   *     // => x: 3, y: 4
   *
   * @param {Number} number The number to add
   * @return {Point} `this` for chaining capabilities
   * @api public
   */
  addNum: function (number) {
    this.x += number;
    this.y += number;
    return this;
  },

  /**
   * Adds the given number to the X coordinate
   *
   * ### Examples:
   *     var point = new Point(1, 2);
   *
   *     point.addX(2);
   *     point.toString();
   *     // => x: 3, y: 2
   *
   * @param {Number} number The number to add
   * @return {Point} `this` for chaining capabilities
   * @api public
   */
  addX: function (number) {
    this.x += number;
    return this;
  },

  /**
   * Adds the given number to the Y coordinate
   *
   * ### Examples:
   *     var point = new Point(1, 2);
   *
   *     point.addY(2);
   *     point.toString();
   *     // => x: 1, y: 4
   *
   * @param {Number} number The number to add
   * @return {Point} `this` for chaining capabilities
   * @api public
   */
  addY: function (number) {
    this.y += number;
    return this;
  },

  /**
   * Subtracts another vector from this one
   *
   * ### Examples:
   *     var point1 = new Point(100, 50);
   *     var point = new Point(20, 30);
   *
   *     point1.subtract(point);
   *     point1.toString();
   *     // => x:80, y:20
   *
   * @param {Point} vector The other vector you want subtract from this one
   * @return {Point} `this` for chaining capabilities
   * @api public
   */
  subtract: function (point) {
    this.x -= point.x;
    this.y -= point.y;
    return this;
  },

  /**
   * Subtracts the given number from the X and Y coordinates of the point
   *
   * ### Examples:
   *     var point = new Point(100, 200);
   *
   *     point.subtractNum(20);
   *     point.toString();
   *     // => x: 80, y: 180
   *
   * @param {Number} number The number to subtract
   * @return {Point} `this` for chaining capabilities
   * @api public
   */
  subtractNum: function (number) {
    this.x -= number;
    this.y -= number;
    return this;
  },

  /**
   * Subtracts the given number from the X coordinate
   *
   * ### Examples:
   *     var point = new Point(100, 200);
   *
   *     point.subtractX(20);
   *     point.toString();
   *     // => x: 80, y: 200
   *
   * @param {Number} number The number to subtract
   * @return {Point} `this` for chaining capabilities
   * @api public
   */
  subtractX: function (number) {
    this.x -= number;
    return this;
  },

  /**
   * Subtracts the given number from the Y coordinate
   *
   * ### Examples:
   *     var point = new Point(100, 200);
   *
   *     point.subtractY(20);
   *     point.toString();
   *     // => x: 100, y: 180
   *
   * @param {Number} number The number to subtract
   * @return {Point} `this` for chaining capabilities
   * @api public
   */
  subtractY: function (number) {
    this.y -= number;
    return this;
  },

  /**
   * Divides X and Y coordinates of the point by those of the given point
   *
   * ### Examples:
   *     var point = new Point(100, 50);
   *     var point = new Point(2, 2);
   *
   *     point.divide(point);
   *     point.toString();
   *     // => x:50, y:25
   *
   * @param {Point} vector The vector to divide by
   * @return {Point} `this` for chaining capabilities
   * @api public
   */
  divide: function (point) {
    this.x /= point.x;
    this.y /= point.y;
    return this;
  },

  /**
   * Divides X and Y coordinates of the point by those of the given number
   *
   * ### Examples:
   *     var point = new Point(100, 50);
   *
   *     point.divideNum(2);
   *     point.toString();
   *     // => x:50, y:25
   *
   * @param {Number} number The number to divide by
   * @return {Point} `this` for chaining capabilities
   * @api public
   */
  divideNum: function (number) {
    if (number === 0) {
      this.x = 0;
      this.y = 0;
    } else {
      this.x /= number;
      this.y /= number;
    }

    return this;
  },

  /**
   * Divides the X coordinate by the given number
   *
   * ### Examples:
   *     var point = new Victor(100, 50);
   *
   *     point.divideX(2);
   *     point.toString();
   *     // => x:50, y:50
   *
   * @param {Number} The number to divide by
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  divideX: function (number) {
    if (number === 0) {
      this.x = 0;
    } else {
      this.x /= number;
    }
    return this;
  },

  /**
   * Divides the Y coordinate by the given number
   *
   * ### Examples:
   *     var point = new Victor(100, 50);
   *
   *     point.divideY(2);
   *     point.toString();
   *     // => x:100, y:25
   *
   * @param {Number} The number to divide by
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  divideY: function (number) {
    if (number === 0) {
      this.y = 0;
    } else {
      this.y /= number;
    }
    return this;
  },

  /**
   * Inverts the X and Y coordinates of the point
   *
   * ### Examples:
   *     var point = new Point(100, 50);
   *
   *     point.invert();
   *     point.toString();
   *     // => x:-100, y:-50
   *
   * @return {Point} `this` for chaining capabilities
   * @api public
   */
  invert: function () {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  },

  /**
   * Inverts the X coordinate
   *
   * ### Examples:
   *     var point = new Point(100, 50);
   *
   *     point.invertX();
   *     point.toString();
   *     // => x:-100, y:50
   *
   * @return {Point} `this` for chaining capabilities
   * @api public
   */
  invertX: function () {
    this.x = -this.x;
    return this;
  },

  /**
   * Inverts the Y coordinate
   *
   * ### Examples:
   *     var point = new Point(100, 50);
   *
   *     point.invertY();
   *     point.toString();
   *     // => x:100, y:-50
   *
   * @return {Point} `this` for chaining capabilities
   * @api public
   */
  invertY: function () {
    this.y = -this.y;
    return this;
  },

  /**
   * Sets the integer remainders of dividing the point by
   * the supplied point
   *
   * ### Examples:
   * var point = new Point(12, 6);
   * point.modulo(new Point(5, 2))
   * console.log(point); // {x: 2, y: 0}
   *
   * @param {Point} point
   * @return {Point} `this` for chaining capabilities
   * @api public
   */
  modulo: function (point) {
    this.x = this.x % point.x;
    this.y = this.y % point.y;
    return this;
  },

  /**
   * Sets the integer remainders of dividing the point's
   * coordinates by the supplied number
   *
   * ### Examples:
   * var point = new Point(12, 6);
   * point.modulo(new Point(5, 2))
   * console.log(point); // {x: 2, y: 0}
   *
   * @param {Point} vector
   * @return {Point} `this` for chaining capabilities
   * @api public
   */
  moduloNum: function (number) {
    this.x = this.x % number;
    this.y = this.y % number;
    return this;
  },

  /**
   * Sets the integer remainders of dividing the x coordinate by
   * the supplied number
   *
   * ### Examples:
   * var point = new Point(12, 6);
   * point.moduloX(5)
   * console.log(point); // {x: 2, y: 6}
   *
   * @param {Point} number
   * @return {Point} `this` for chaining capabilities
   * @api public
   */
  moduloX: function (number) {
    this.x = this.x % number;
    return this;
  },

  /**
   * Sets the integer remainders of dividing the y coordinate by
   * the supplied number
   *
   * ### Examples:
   * var point = new Point(12, 6);
   * point.moduloY(5)
   * console.log(point); // {x: 12, y: 1}
   *
   * @param {Point} number
   * @return {Point} `this` for chaining capabilities
   * @api public
   */
  moduloY: function (number) {
    this.y = this.y % number;
    return this;
  },

  /**
   * Multiplies the X and Y coordinates by coordinates from a given point
   *
   * ### Examples:
   *     var point = new Point(100, 50);
   *     var point = new Point(2, 2);
   *
   *     point.multiply(point);
   *     point.toString();
   *     // => x:200, y:100
   *
   * @param {Point} vector The vector to multiply by
   * @return {Point} `this` for chaining capabilities
   * @api public
   */
  multiply: function (vector) {
    this.x *= vector.x;
    this.y *= vector.y;
    return this;
  },

  /**
   * Multiplies the X and Y coordinates by the given number
   *
   * ### Examples:
   *     var point = new Point(100, 50);
   *
   *     point.multiplyNum(2);
   *     point.toString();
   *     // => x:200, y:100
   *
   * @param {Number} number The number to multiply by
   * @return {Point} `this` for chaining capabilities
   * @api public
   */
  multiplyNum: function (number) {
    this.x *= number;
    this.y *= number;
    return this;
  },

  /**
   * Multiplies the X coordinate by the given number
   *
   * ### Examples:
   *     var point = new Victor(100, 50);
   *
   *     point.multiplyX(2);
   *     point.toString();
   *     // => x:200, y:50
   *
   * @param {Number} The number to multiply the X coordinate with
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  multiplyX: function (number) {
    this.x *= number;
    return this;
  },

  /**
   * Multiplies the Y coordinate by the given number
   *
   * ### Examples:
   *     var point = new Victor(100, 50);
   *
   *     point.multiplyY(2);
   *     point.toString();
   *     // => x:100, y:100
   *
   * @param {Number} number The number to multiply the Y coordinate with
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  multiplyY: function (number) {
    this.y *= number;
    return this;
  },

  /**
   * Normalizes the length of the vector to 1 without
   * changing its angle. The optional
   * length parameter defines the length to normalize to.
   *
   * @param {Number} length The length of the normalized vector
   * @return {Point} the normalized vector of the vector that is represented
   *                 by this point's X and Y coordinates
   *
   * @return {Point} `this` for chaining capabilities
   * @api public
   */
  normalize: function (length) {
    if (length === undefined) length = 1;
    var current = this.getLength();

    var scale = current !== 0 ? length / current : 0;
    this.multiplyNum(scale);

    return this;
  },

  /**
   * Rounds the X and Y coordinates of the point to an integer value
   *
   * ### Examples:
   *     var point = new Point(100.2, 50.9);
   *
   *     point.round();
   *     point.toString();
   *     // => x:100, y:51
   *
   * @return {Point} `this` for chaining capabilities
   * @api public
   */
  round: function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  },

  /**
   * Sets the X and Y coordinates of the point to absolute values
   *
   * ### Examples:
   *     var point = new Point(-100, 100);
   *
   *     point.abs();
   *     point.toString();
   *     // => x:100, y:100
   *
   * @return {Point} `this` for chaining capabilities
   * @api public
   */
  abs: function () {
    this.x = Math.abs(this.x);
    this.y = Math.abs(this.y);
    return this;
  },

  /**
   * Sets the X and Y coordinates to the smallest integer greater
   * than or equal to the given coordinates
   *
   * ### Examples:
   *     var point = new Point(10.3, 10.8);
   *
   *     point.ceil();
   *     point.toString();
   *     // => x:11, y:11
   *
   * @return {Point} `this` for chaining capabilities
   * @api public
   */
  ceil: function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  },

  /**
   * Sets the X and Y coordinates to the largest integer less
   * than or equal to the given coordinates
   *
   * ### Examples:
   *     var point = new Point(10.3, 10.8);
   *
   *     point.floor();
   *     point.toString();
   *     // => x:10, y:10
   *
   * @return {Point} `this` for chaining capabilities
   * @api public
   */
  floor: function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  },

  /**
   * Performs a linear blend / interpolation towards another point
   *
   * ### Examples:
   *     var point1 = new Point(100, 100);
   *     var point = new Point(200, 200);
   *
   *     point1.mix(point, 0.5);
   *     point.toString();
   *     // => x:150, y:150
   *
   * @param {Point} point The other point
   * @param {Number} amount The blend amount (optional, default: 0.5)
   * @return {Point} `this` for chaining capabilities
   * @api public
   */
  mix: function (point, amount) {
    this.x = numerical.mix(this.x, point.x, amount);
    this.y = numerical.mix(this.y, point.y, amount);
    return this;
  },

  /**
   * # Products
   */

  /**
   * Creates a clone of this point
   *
   * ### Examples:
   *     var point1 = new Point(10, 10);
   *     var point = point1.clone();
   *
   *     point.toString();
   *     // => x:10, y:10
   *
   * @return {Point} the cloned point
   * @api public
   */
  clone: function () {
    return new Point(this.x, this.y);
  },

  /**
   * Copies another point's X and Y coordinates to its own
   *
   * ### Examples:
   *     var point1 = new Point(10, 10);
   *     var point = new Point(20, 20);
   *     point1.copy(point);
   *
   *     point1.toString();
   *     // => x:20, y:20
   *
   * @return {Point} `this` for chaining capabilities
   * @api public
   */
  copy: function (point) {
    this.x = point.x;
    this.y = point.y;
    return this;
  },

  /**
   * Returns the vector from this point to the supplied point
   *
   * ### Examples:
   *     var point = new Point(10, 10);
   *     var point1 = new Point(15, 15);
   *     var vector = point.getVector(point1);
   *
   *     vector.toString();
   *     // => x:5, y:5
   *
   * @return {Point} The vector
   * @api public
   */
  getVector: function (point) {
    return point.clone().subtract(this);
  },

  /**
   * Sets the point to zero (0,0)
   *
   * ### Examples:
   *     var point1 = new Point(10, 10);
   *     var1.zero();
   *     point1.toString();
   *     // => x:0, y:0
   *
   * @return {Point} `this` for chaining capabilities
   * @api public
   */
  zero: function () {
    this.x = this.y = 0;
    return this;
  },

  /**
   * Calculates the dot product of this vector and another
   *
   * ### Examples:
   *     var point1 = new Point(100, 50);
   *     var point = new Point(200, 60);
   *
   *     point1.dot(point);
   *     // => 23000
   *
   * @param {Point} vector The second vector
   * @return {Number} the dot product of the two points
   * @api public
   */
  dot: function (point) {
    return this.x * point.x + this.y * point.y;
  },

  /**
   * Returns the cross product of this vector and another
   *
   * @param {Point} vector The second vector
   * @returns {Number} the cross product of the two points
   */
  cross: function (point) {
    return this.x * point.y - this.y * point.x;
  },

  /**
   * Projects a vector onto this vector, setting itself to the result.
   *
   * ### Examples:
   *     var point = new Point(100, 0);
   *     var point = new Point(100, 100);
   *
   *     point.project(point);
   *     point.toString();
   *     // => x:50, y:50
   *
   * @param {Point} vector The other vector you want to project this vector onto
   * @return {Point} `this` for chaining capabilities
   * @api public
   */
  project: function (vector) {
    var coeff = vector.isZero()
      ? 0
      : this.dot(vector) / vector.getLengthSquared();
    this.x = coeff * vector.x;
    this.y = coeff * vector.y;
    return this;
  },

  getAngle: function (point) {
    return numerical.radiansToDegrees(this.getAngleInRadians(point));
  },

  getAngleInRadians: function (point) {
    if (!point) {
      return this.isZero()
        ? // Return the preserved angle in case the vector has no
          // length, and update the internal _angle in case the
          // vector has a length. See #setAngle() for more
          // explanations.
          this._angle || 0
        : (this._angle = Math.atan2(this.y, this.x));
    } else {
      var div = this.getLength() * point.getLength();
      if (numerical.isZero(div)) {
        return NaN;
      } else {
        var a = this.dot(point) / div;
        return Math.acos(a < -1 ? -1 : a > 1 ? 1 : a);
      }
    }
  },

  getDirectedAngle: function (point) {
    return (Math.atan2(this.cross(point), this.dot(point)) * 180) / Math.PI;
  },

  setAngle: function (angle) {
    this.setAngleInRadians(numerical.degreesToRadians(angle));
    return this;
  },

  setAngleInRadians: function (angle) {
    // We store a reference to _angle internally so we still preserve it
    // when the vector's length is set to zero, and then anything else.
    // Note that we cannot rely on it if x and y are something else than 0,
    // since updating x / y does not automatically change _angle!
    this._angle = angle;
    console.log(this.isZero());
    if (!this.isZero()) {
      var length = this.getLength();
      this.x = Math.cos(angle) * length;
      this.y = Math.sin(angle) * length;
    }
    return this;
  },

  /**
   * Rotates the point by the given angle around an optional center point.
   *
   * @param {Number} angle the rotation angle in radian
   * @param {Point} center the optional center point of the rotation
   * @return {Point} `this` for chaining capabilities
   */
  rotate: function (angle, center) {
    if (angle === 0) return this;
    var radians = numerical.degreesToRadians(angle);
    var s = Math.sin(radians);
    var c = Math.cos(radians);
    var x = this.x;
    var y = this.y;
    if (center) {
      x -= center.x;
      y -= center.y;
    }
    var x1 = x * c - y * s;
    var y1 = x * s + y * c;
    if (center) {
      x1 += center.x;
      y1 += center.y;
    }
    this.x = x1;
    this.y = y1;
    return this;
  },

  rotateBy: function (rotation) {
    return this.rotate(this.getAngle() + rotation);
  },

  /**
   * Calculates the euclidean distance between this point and another
   *
   * ### Examples:
   *     var point1 = new Point(100, 50);
   *     var point = new Point(200, 60);
   *
   *     point1.distance(point);
   *     // => 100.4987562112089
   *
   * @param {Point} point The second point
   * @return {Number} Distance
   * @api public
   */
  getDistance: function (point) {
    return Math.sqrt(this.getDistanceSquared(point));
  },

  /**
   * Calculates the squared euclidean distance between this point and another
   *
   * ### Examples:
   *     var point1 = new Point(100, 50);
   *     var point = new Point(200, 60);
   *
   *     point1.getDistanceSquared(point);
   *     // => 10100
   *
   * @param {Point} point The second point
   * @return {Number} Distance
   * @api public
   */
  getDistanceSquared: function (point) {
    var dx = this.x - point.x;
    var dy = this.y - point.y;
    return dx * dx + dy * dy;
  },

  /**
   * Calculates the length or magnitude of the point
   *
   * ### Examples:
   *     var point = new Point(100, 50);
   *
   *     point.length();
   *     // => 111.80339887498948
   *
   * @return {Number} Length / Magnitude
   * @api public
   */
  getLength: function () {
    return Math.sqrt(this.getLengthSquared());
  },


  // double-dog-leg hypothenuse approximation
  // http://forums.parallax.com/discussion/147522/dog-leg-hypotenuse-approximation
  getApproximateLength: function () {
    var x = Math.abs(this.x);
    var y = Math.abs(this.y);
    var lo = Math.min(x, y);
    var hi = Math.max(x, y);
    return (
      hi +
      (3 * lo) / 32 +
      Math.max(0, 2 * lo - hi) / 8 +
      Math.max(0, 4 * lo - hi) / 16
    );
  },

  /**
   * Squared length / magnitude
   *
   * ### Examples:
   *     var point = new Point(100, 50);
   *
   *     point.getLengthSquared();
   *     // => 12500
   *
   * @return {Number} Length / Magnitude
   * @api public
   */
  getLengthSquared: function () {
    return this.x * this.x + this.y * this.y;
  },

  /**
   * Changes the location of the vector, but keeps it's angle.
   *
   * @param {Number} length
   * @return {Point} `this` for chaining capabilities
   */
  setLength: function (length) {
    if (this.isZero()) {
      var angle = this._angle || 0;
      this.x = Math.cos(angle) * length;
      this.y = Math.sin(angle) * length;
    } else {
      var scale = length / this.getLength();
      this.x = this.x * scale;
      this.y = this.y * scale;
    }
    return this;
  },

  /**
   * Limits the length of the vector, but keeps it's angle.
   *
   * @param {Number} length
   * @return {Point} `this` for chaining capabilities
   */
  limitLength: function (length) {
    var len = this.getLength();
    if (len > length) {
      var scale = length / len;
      this.x = this.x * scale;
      this.y = this.y * scale;
    }
    return this;
  },

  inverse: function () {
    this.x = 1.0 / this.x;
    this.y = 1.0 / this.y;
    return this;
  },

  /**
   * Checks if the point is within a given distance of another point.
   *
   * @param {Point} point the point to check against
   * @param {Number} tolerance the maximum distance allowed
   * @returns {Boolean} true if it is within the given distance, false otherwise
   * @api public
   */
  isClose: function (point, tolerance) {
    return this.getDistanceSquared(point) < tolerance * tolerance;
  },

  /**
   * Checks if the vector represented by this point is collinear (parallel) to
   * another vector.
   *
   * @param {Point} point the vector to check against
   * @returns {Boolean} true if it is colinear
   */
  isCollinear: function (point) {
    return numerical.isZero(Math.abs(this.cross(point)));
  },

  /**
   * Checks if the vector represented by this point is orthogonal
   * (perpendicular) to another vector.
   *
   * @param {Point} point the vector to check against
   * @returns {Boolean} true if it is orthogonal, false otherwise
   */
  isOrthogonal: function (point) {
    return numerical.isZero(Math.abs(this.dot(point)));
  },

  /**
   * Checks whether the point's X and Y coordinates are both 0
   *
   * ### Examples:
   *     var point = new Point(100, 50);
   *
   *     point.isZero();
   *     // => true
   *
   * @return {Boolean}
   * @api public
   */
  isZero: function () {
    return numerical.isZero(this.x) && numerical.isZero(this.y);
  },

  /**
   * Checks whether the coordinates of the point are equal to that of the
   * supplied point.
   *
   * ### Examples:
   *     var point1 = new Point(100, 50);
   *     var point = new Point(100, 50);
   *
   *     point1.equals(point);
   *     // => true
   *
   * @return {Boolean} true if the coordinates are equal, false otherwise
   * @api public
   */
  equals: function (point) {
    return this.x === point.x && this.y === point.y;
  },

  /**
   * # Utility Methods
   */

  /**
   * Returns an string representation of the point
   *
   * ### Examples:
   *     var point = new Point(10, 20);
   *
   *     point.toString();
   *     // => x:10, y:20
   *
   * @return {String}
   * @api public
   */
  toString: function () {
    return (
      "{ x: " +
      numerical.format(this.x) +
      ", y: " +
      numerical.format(this.y) +
      " }"
    );
  },

  /**
   * Returns an array representation of the point
   *
   * ### Examples:
   *     var point = new Point(10, 20);
   *
   *     point.toArray();
   *     // => [10, 20]
   *
   * @return {Array}
   * @api public
   */
  toArray: function () {
    return [this.x, this.y];
  },

  /**
   * Returns an object representation of the point
   *
   * ### Examples:
   *     var point = new Point(10, 20);
   *
   *     point.toObject();
   *     // => { x: 10, y: 20 }
   *
   * @return {Object}
   * @api public
   */
  toObject: function () {
    return { x: this.x, y: this.y };
  },
};

Point.prototype.getHorizontalAngle = Point.prototype.getAngle;
Point.prototype.getHorizontalAngleDeg = Point.prototype.getAngleInDegrees;

/**
 * # Static
 */

/**
 * Creates a new instance from an array
 *
 * ### Examples:
 *     var point = Point.fromArray([42, 21]);
 *
 *     point.toString();
 *     // => x:42, y:21
 *
 * @name Point.fromArray
 * @param {Array} array Array with the x and y coordinates at index 0 and 1 respectively
 * @return {Point} The new instance
 * @api public
 */
Point.fromArray = function (arr) {
  return new Point(arr[0] || 0, arr[1] || 0);
};

/**
 * Creates a new instance from an object
 *
 * ### Examples:
 *     var point = Point.fromObject({ x: 42, y: 21 });
 *
 *     point.toString();
 *     // => x:42, y:21
 *
 * @name Point.fromObject
 * @param {Object} obj Object with the values for x and y
 * @return {Point} The new instance
 * @api public
 */
Point.fromObject = function (obj) {
  return new Point(obj.x || 0, obj.y || 0);
};

Point.fromAngleWithLength = function (angle, length) {
  var point = new Point(length, 0);
  point.setAngle(angle);
  return point;
};

/**
 * Generates a random vector between 0 and 360 degrees with the given length,
 * or a length of 1 if none was provided
 *
 * ### Examples:
 *     var randomVector = Point.random();
 *
 *     point.toString();
 *     // => x:0.0273982 y: 0.9784389
 *
 * @name Point.randomVector
 * @param scale Length of the resulting vector. If ommitted, a unit vector will be returned
 * @return {Point} The new instance
 * @api public
 */
Point.randomVector = function (length) {
  length = length || 1.0;
  var r = Math.random() * 2.0 * Math.PI;
  return new Point(Math.cos(r) * length, Math.sin(r) * length);
};

/**
 * Generates a random point with X and Y coordinates between 0 and 1
 *
 * ### Examples:
 *     var randomVector = Point.random();
 *
 *     point.toString();
 *     // => x:0.0273982 y: 0.9784389
 *
 * @name Point.random
 * @return {Point} The new instance
 * @api public
 */
Point.random = function () {
  return new Point(Math.random(), Math.random());
};

/**
 * Returns a new point object with the smallest x and y of the
 * supplied points.
 *
 * @static
 * @param {Point} point1
 * @param {Point} point2
 *
 * @name Point.min
 * @return {Point} The new instance
 * @api public
 */
Point.min = function (point1, point2) {
  return new Point(Math.min(point1.x, point2.x), Math.min(point1.y, point2.y));
};

/**
 * Returns a new point object with the largest x and y of the
 * supplied points.
 *
 * @static
 * @param {Point} point1
 * @param {Point} point2
 *
 * @name Point.max
 * @return {Point} The new instance
 * @api public
 */
Point.max = function (point1, point2) {
  return new Point(Math.max(point1.x, point2.x), Math.max(point1.y, point2.y));
};
