// let x: number = Math.max(2, 4);
// console.log(x);
// console.log(Math.min(2, 4) + 10);
// let userInput: string = prompt("Pick a number");
// let userNumber: number = Number(userInput);
// console.log("The square of your number is " + userNumber * userNumber);

function add(_a: number, _b: number): number {
    let result: number = _a + _b;
    return result;
}

function example(): void {
    console.log("This will be print to the console");
    return;
    console.log("This won't, because the code will never reach here.");
}