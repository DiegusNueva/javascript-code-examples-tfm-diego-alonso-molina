// geometry.js

function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

function calculateCircleLength(radius) {
    return 2*(Math.PI) * radius;
}

function calculateDistance(x1, y1, x2, y2) {
    // Calcula la diferencia en las coordenadas x e y
    let dx = x2 - x1;
    let dy = y2 - y1;

    // Calcula la distancia usando la fórmula
    let distance = Math.sqrt(dx * dx + dy * dy);

    return distance;
}


module.exports = {
    calculateCircleArea,
    calculateCircleLength,
    calculateDistance
};