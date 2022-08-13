const {addition, subtraction, multiplication, division, squareRoot, maxNumber} = require("./math");

describe("Testing Math Module", ()=>{
    test("Testing addition of numbers",()=>{
        const result = addition(2, 2);
        expect(result).toEqual(4)
    });

    test("Testing subtraction of numbers", ()=>{
        const result = subtraction(2, 2);
        expect(result).toEqual(0)
    });

    test("Testing multiplication of numbers", ()=>{
        const result = multiplication(2, 2);
        expect(result).toEqual(4)
    });

    test("Testing division of numbers", ()=>{
        const result = division(2, 2);
        expect(result).toEqual(1)
    });

    test("Testing square root of a number", ()=>{
        const result = squareRoot(9);
        expect(result).toEqual(3)
    });

    test("Testing max of two numbers", ()=>{
        const result = maxNumber(9, 3);
        expect(result).toEqual(9)
    });

});