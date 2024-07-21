//  01 - Generic Box of String
// class Box<T>{
//     input: T;
//     constructor(input: T){
//         this.input = input;
//     }
//     toString<T>(){
//    return `${this.input} is of type ${typeof this.input}`; 
//     }
// }

// const box1 = new Box(['test']);
// console.log(box1.toString());

// const box2 = new Box(20);
// console.log(box2.toString());

// const box3 = new Box('Hello');
// console.log(box3.toString());

// 02 - Generic Compare Elements
// class CompareElements<T>{
//     genericType: T[];
//     constructor(genericType: T[]) {
//     this.genericType = genericType;   
//     }
//     compare(arg: any){
//       let comparator: number = 0;
//       for (let i = 0; i < this.genericType.length; i++) {
//         if(arg === this.genericType[i]){
//             comparator++;  
//         }
//       }
//       return comparator;
//     }
// }

// const c = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);
// console.log(c.compare('b'));

// const c1 = new CompareElements([1, 2, 3, 4, 5, 1, 1]);
// console.log(c1.compare(1));

//  03 - Car Dealership
interface Dealership<T>{
    dealershipName: T;
    soldCar: number;
}

interface Actions<T, V>{
dealerId: T;
model: V;
}

class CarDealership {
modelSold: [] = [];

}
