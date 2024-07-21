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
//     const rectArea: number = length * width;
//     console.log(rectArea);
//  }
// calcRectangleArea(5, 7);
// calcRectangleArea(6, 8);

// 04 - Convertor inches to centimeters
// function convertorInchesToCentimeterd(inches: number): void {
//     const centimeters: number = inches * 2.54;
//     console.log(centimeters);
// }
// convertorInchesToCentimeterd(5);

//  05 - Calculate circle area
// function calcCircleArea(r: number): void {
//    const circleArea: string = (Math.PI * r * r).toFixed(2);
//    console.log(circleArea);
// }
// calcCircleArea(5);

// 06 - String length
// function calcStringLength(str: string): void {
//     const strLength: number = str.length;
//     console.log(strLength);
// }
// calcStringLength('chocolate');

//  07 - Largest number
// function getLargestNumber(arg1: number, arg2: number, arg3: number): void {
//     const numbersArray: number[] = [];
//     numbersArray.push(arg1);
//     numbersArray.push(arg2);
//     numbersArray.push(arg3);

//     let largest = numbersArray[0];

//     for (let i = 0; i < numbersArray.length; i++) {

//         if(numbersArray[i] > largest){
//             largest = numbersArray[i]
//         }
//     }
//     console.log(`The largest number is ${largest}`);
// }
// getLargestNumber(5, -3, 16);
// getLargestNumber(-3, -5, -22.5);

//  08 Sun of numbers n..m
// function calc(n: string, m: string): void {
//     const mAsNumber = Number(m);
//     const array: number[] = [];

//     const initialValue: number = 0;

//     for (let i = Number(n); i <= mAsNumber; i++) {
//        array.push(i);
//     }

//      let sum = array.reduce((previousVal, currentVal) => previousVal + currentVal, initialValue);
//      console.log(sum);
// }
// calc('1', '5');
// calc('-8', '20');

//  09 - Day fo week
function dayOfWeek(weekDay: string): void {
  switch (weekDay) {
    case "Monday":
      console.log(1);
      break;
    case "Tuesday":
      console.log(2);
      break;
    case "Wednesday":
      console.log(3);
      break;
    case "Thursday":
      console.log(4);
      break;
    case "Friday":
      console.log(5);
      break;
    case "Saturday":
      console.log(6);
      break;
    case "Sunday":
      console.log(7);
      break;
    default:
      console.log("error");
      break;
  }
}
dayOfWeek('Monday');
dayOfWeek('Invalid');
