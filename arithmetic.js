// arithmetic.js

function greatestCommonFactor(num1, num2) {
    // Utilizar el algoritmo de Euclides para calcular el MCD
    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}

function factorial(n) {
    // Caso base: si n es 0, el factorial de 0 es 1
    if (n === 0) {
        return 1;
    }
    // Llamada recursiva: n * factorial(n-1)
    return n * factorial(n - 1);
}



module.exports = {
    greatestCommonFactor,
    factorial
};
