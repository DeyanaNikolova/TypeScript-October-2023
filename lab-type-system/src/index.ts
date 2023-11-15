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
function calcRectangleArea(length: number, width: number): void {
    const rectArea = length * width;
    console.log(rectArea);   
}
calcRectangleArea(5, 7);
calcRectangleArea(6, 8);