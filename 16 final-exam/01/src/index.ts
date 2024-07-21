function sum(firstNumber: number, secondNuber: number) {
    let sum: number = 0;
    const numberArray: number[] = [];
    for (let i = firstNumber; i <= secondNuber; i++) {
       
        sum += i;
        numberArray.push(i);    
    }
    console.log(numberArray.join(' '));
    console.log(`Sum: ${sum}`);  
}

sum(0, 26);
