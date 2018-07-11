
export class Calculator {
    constructor() {

    }
    /**
     * Addition between two numbers
     * 
     * @param {number} a 
     * @param {number} b 
     * @returns {number} 
     * @memberof Calculator
     */
    Add(a: number, b: number): number {
          return a + b;
     }

    /**
     * Subtraction of between two numbers
     * 
     * @param {number} a 
     * @param {number} b 
     * @returns {number} 
     * @memberof Calculator
     */
    Substract(a: number, b: number): number {
        return a - b;
    }

    /**
     * Division between two numbers
     * 
     * @param {number} a 
     * @param {number} b 
     * @returns {number} 
     * @memberof Calculator
     */
    Divide(a: number, b: number): number {
        return a / b;
    }

    /**
     * Multiplication between two numbers
     * 
     * @param {number} a 
     * @param {number} b 
     * @returns {number} 
     * @memberof Calculator
     */
    Multiply(a: number, b: number): number {
        return a * b;
    }
}


