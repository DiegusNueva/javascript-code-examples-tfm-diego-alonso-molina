// probabilityAndStatistics.js

//statistic
function calculateMean(numbers) {
    const total = numbers.reduce((acc, number) => acc + number, 0);
    return total / numbers.length;
}

//probability
function uniformRandomNumbers(max, min){
    return Math.random() * (max - min) + min;
}

module.exports = {
    calculateMean,
    uniformRandomNumbers
};