// main.js

const { greatestCommonFactor, factorial } = require('./arithmetic.js');
const { solveLinearEquation, solveBySubstitution } = require('./algebra.js');
const { solveQuadraticEquation } = require('./equations.js');
const { calculateCircleArea, calculateCircleLength, calculateDistance } = require('./geometry.js');
const { calculateMean, uniformRandomNumbers } = require('./probabilityAndStatistics.js');

// Ejemplos de uso:
console.log(greatestCommonFactor(56, 32)); // Output: 6
console.log(factorial(5)); // Output: 5040
console.log(solveLinearEquation(1, 7)); // Output: -7
console.log(solveBySubstitution(1, 2, 3, 4, 5, 6)); // Output: { x: -1, y: 2 }
console.log(solveQuadraticEquation(1, -3, 2)); // Output: [2, 1]
console.log(calculateCircleArea(4)); // Output: 50.26548245743669
console.log(calculateCircleLength(4)); // Output: 25.132741228718345
console.log(calculateDistance(5, 10, 6, 7)); // Output: 3.1622
console.log(calculateMean([1, 2, 3, 4, 5])); // Output: 3
console.log(uniformRandomNumbers(5, 10)); // Output: 5, 6, 7, 8, 9, 10
