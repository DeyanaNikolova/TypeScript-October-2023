//  01 - Hello World
// function greeting(): void {
//     console.log('Hello World!');   
// }
// greeting();

//  02 - Numbers 1 to 10
// function printNumbers(): void {
//     for (let i = 1; i < 10; i++) {
//         console.log(`${i}\n`); 
//     }
// }
// printNumbers();

//  03 - Calc rectangle area
// function calcRectangleArea(length: number, width: number): void {
//     const rectArea = length * width;
//     console.log(rectArea);   
// }
// calcRectangleArea(5, 7);
// calcRectangleArea(6, 8);

// 04 - Convertor inches to centimeters
// function convertorInchesToCentimeterd(inches: number): void {
//     const centimeters = inches * 2.54;
//     console.log(centimeters);
// }
// convertorInchesToCentimeterd(5);

//  05 - Calculate circle area
// function calcCircleArea(r: number): void {
//    const circleArea = (Math.PI * r * r).toFixed(2);
//    console.log(circleArea);
// }
// calcCircleArea(5);

// 06 - String length
function calcStringLength(str: string): void {
    const strLength = str.length;
    console.log(strLength);
}
calcStringLength('chocolate');