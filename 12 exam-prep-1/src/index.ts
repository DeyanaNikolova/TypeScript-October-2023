// function calculator(a: number, opr: string, b: number): number {
//   switch (opr) {
//     case "+":
//       return (a + b).toFixed(2);
//     case "-":
//       return (a - b).toFixed(2);
//     case "*":
//       return (a * b).toFixed(2);
//     case "/":
//       return (a / b).toFixed(2);
//   }
// }

// console.log(calculator(5, '+', 10));
// console.log(calculator(25.5, '-', 3));
// console.log(calculator(9, '/', 2));
// console.log(calculator(7, '*', 5));

// Calculator with dictionary

type CalcType = {
    [key: string]: string;
}
function calculator(a: number, opr: string, b: number) {
    const calc: CalcType = {
        '+': (a + b).toFixed(2),
        '-': (a - b).toFixed(2),
        '/': (a / b).toFixed(2),
        '*': (a * b).toFixed(2),
    }
    return calc[opr];
}

console.log(calculator(5, '+', 10));
console.log(calculator(25.5, '-', 3));
console.log(calculator(9, '/', 2));
console.log(calculator(7, '*', 5));

// Probem 1 function
function calculator1(a: number, operator: string, b: number): void {
    
    if(operator === '+'){
      console.log(a + b);
    }else if(operator === '-'){
      console.log(a - b);
    } else if(operator === '*'){
      console.log(a * b);
    } else{
      console.log(a / b);
    }
     
  }
  
  calculator1(5, '+', 10);
  calculator1(25.5, '-', 3);
  calculator1(7, '*', 5);
  calculator1(9, '/', 2);

