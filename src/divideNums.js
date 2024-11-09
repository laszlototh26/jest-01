
function divideNums(numA, numB) {

    if (typeof numA !== 'number' || typeof numB !== 'number') {
        throw new Error('Invalid Argument Exception');
    }

    if (numB === 0) throw new Error('numB cannot be 0');

    const result = numA / numB;

    return result;
}

module.exports = {
    divideNums
}
