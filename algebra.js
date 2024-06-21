// algebra.js

// resolver ecuaciones lineales de la forma 𝑎𝑥 + 𝑏 = 0
function solveLinearEquation(a, b) {
    if (a === 0) {
        if (b === 0) return "Infinite solutions";
        else return "No solution";
    }
    return -b / a;
}

// resolver sistemas de ecuaciones lineales de la forma
/**
 * a1⋅x+b1⋅y=c1
 * a2⋅x+b2⋅y=c2
 */
function solveBySubstitution(a1, b1, c1, a2, b2, c2) {
    // Comprobamos si b1 es distinto de 0 para evitar divisiones por 0
    if (b1 !== 0) {
        // Calculamos x a partir de la primera ecuación: ax + by = c
        const x = (c1 - b1 * c2 / b2) / (a1 - b1 * a2 / b2);

        // Calculamos y utilizando x en la primera ecuación: y = (c1 - a1 * x) / b1
        const y = (c1 - a1 * x) / b1;

        // Devolvemos las soluciones
        return { x: x, y: y };
    } else {
        // Si b1 es igual a 0, no se puede usar el método de sustitución
        return "No solution due to division by zero";
    }
}


module.exports = {
    solveLinearEquation,
    solveBySubstitution
};