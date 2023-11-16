//  01 - Generic Box of String
class Box<T>{
    input: T;
    constructor(input: T){
        this.input = input;
    }
    toString<T>(){
   return `${this.input} is of type ${typeof this.input}`; 
    }
}

const box1 = new Box(['test']);
console.log(box1.toString());

const box2 = new Box(20);
console.log(box2.toString());

const box3 = new Box('Hello');
console.log(box3.toString());