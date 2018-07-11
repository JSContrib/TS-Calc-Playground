import { Calculator } from "./Calculator";

class Startup {

    static myCalc: Calculator = new Calculator();
    /**
     * 
     * 
     * @static
     * @memberof Startup
     */
    public static main(): void {
        this.RunSample();
        this.RunSample2();
        this.RunSample3();
    }

    /** 
     * RunSample1
     * Sample static method act as sample entry point.
     */
    public static RunSample(): void {
        const num1 = 1;
        const num2 = 8.3;
        console.log(`[---------------- Sample 1 - Results --------------------]`);
        let result = this.myCalc.Add(num1, num2);
        console.log(`Add two numbers num1: ${num1}, num2: ${num2} = ${result} `);

        result = this.myCalc.Substract(num1, num2);
        console.log(`Sub two numbers num1: ${num1}, num2: ${num2} = ${result} `);

        result = this.myCalc.Multiply(num1, num2);
        console.log(`Multiply two numbers num1: ${num1}, num2: ${num2} = ${result} `);

        result = this.myCalc.Divide(num1, num2);
        console.log(`Divide two numbers num1: ${num1}, num2: ${num2} = ${result} `);
        console.log(`[----------------------------------------------------------]`);
    }

    /**
     * Run Sample 2
     * 
     * @static
     * @memberof Startup
     */
    public static RunSample2(): void {
        const num1 = 19;
        const num2 = 88;
        console.log(`[----------------- Sample 2 - Results --------------------]`);
        let result = this.myCalc.Add(num1, num2);
        console.log(`Add two numbers num1: ${num1}, num2: ${num2} = ${result} `);

        result = this.myCalc.Substract(num1, num2);
        console.log(`Sub two numbers num1: ${num1}, num2: ${num2} = ${result} `);

        result = this.myCalc.Multiply(num1, num2);
        console.log(`Multiply two numbers num1: ${num1}, num2: ${num2} = ${result} `);

        result = this.myCalc.Divide(num1, num2);
        console.log(`Divide two numbers num1: ${num1}, num2: ${num2} = ${result} `);
        console.log(`[----------------------------------------------------------]`);
    }

    /**
     * RunSample3
     * 
     * @static
     * @memberof Startup
     */
    public static RunSample3(): void {
        const num1 = 19;
        const num2 = 88;
        let result = this.myCalc.Add(num1, num2);
        console.log(`[------------------ Sample 3 - Results --------------------]`);
        console.log(`Add two numbers num1: ${num1}, num2: ${num2} = ${result} `);

        result = this.myCalc.Substract(num1, num2);
        console.log(`Sub two numbers num1: ${num1}, num2: ${num2} = ${result} `);

        result = this.myCalc.Multiply(num1, num2);
        console.log(`Multiply two numbers num1: ${num1}, num2: ${num2} = ${result} `);

        result = this.myCalc.Divide(num1, num2);
        console.log(`Divide two numbers num1: ${num1}, num2: ${num2} = ${result} `);
        console.log(`[----------------------------------------------------------]`);
    }
}
Startup.main();


