const addition = (a, b) => {
    let add = a + b;
    return add;
};

const subtraction = (a, b) => {
    let sub = a - b;
    return sub;
}

const multiplication = (a, b) => {
    let multi = a * b;
    return multi;
}

const division = (a, b) => {
    let div = a / b;
    return div;
}

const squareRoot = (a) => {
    let square= Math.sqrt(a);
    return square;
}

const maxNumber = (a, b) => {
    let max= Math.max(a, b);
    return max;
}

module.exports = {addition, subtraction, multiplication, division, squareRoot, maxNumber};