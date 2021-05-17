// Precision when comparing against 0
// References:
//  http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
//  http://www.cs.berkeley.edu/~wkahan/Math128/Cubic.pdf
/**
 * A very small absolute value used to check if a value is very close to
 * zero. The value should be large enough to offset any floating point
 * noise, but small enough to be meaningful in computation in a nominal
 * range (see MACHINE_EPSILON).
 */
 var EPSILON = 1e-12;
 var DEGREES = 180 / Math.PI;
 
 numerical = {
   EPSILON: EPSILON,
 
   mix: function(value1, value2, ratio) {
     return value1 * (1 - ratio) + value2 * ratio;
   },
 
   radiansToDegrees: function(rad) {
     return rad * DEGREES;
   },
 
   degreesToRadians: function(deg) {
     return deg / DEGREES;
   },
 
   format: function(number) {
     // It would be nice to use Number#toFixed() instead, but it pads with 0,
     // unecessarily consuming space.
     var multiplier = 100000; // Math.pow(10, 5), where 5 is the amount of fractional digits
     return Math.round(number * multiplier) / multiplier;
   },
 
   isZero: function isZero(number) {
     return number < EPSILON;
   }
 }
 