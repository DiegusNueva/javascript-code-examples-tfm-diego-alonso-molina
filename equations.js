// equations.js

function solveQuadraticEquation(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [root1, root2];
    } else if (discriminant === 0) {
        return [-b / (2 * a)];
    } else {
        return "No real roots";
    }
}

module.exports = {
    solveQuadraticEquation
};