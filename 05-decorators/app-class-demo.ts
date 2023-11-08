@withEmploymentDateOnPrototipe
@withEmploymentDate
class Meneger {
  task: string = 'Simple task';
  project: string = 'Simple project';

  constructor() {
    // console.log("Manager initialized!");
  }
}

const menager = new Meneger();
console.log(menager);
// console.log(menager.constructor.prototype);

function withEmploymentDateOnPrototipe(
  value: Function,
  context: ClassDecoratorContext
) {
  value.prototype.employmentDateOnPrototype = new Date().toISOString();
}

type Args = { new (...args: any[]): {}};
function withEmploymentDate<T extends Args>(
  baseClass: T,
  context: ClassDecoratorContext
    ) {
        return class extends baseClass {
            employmentDate = new Date().toISOString();

            constructor(... args: any[]) {
                super(... args);
                console.log('Adding employment date to ' + baseClass.name);    
            }
        }
}



function printDecoratorData(
  value: Function,
  context: ClassDecoratorContext
) {
  console.log({ value });
// console.log({ context });

  context.addInitializer(() => {
    // console.log("Class initialized: " + context.name);
  });
}

// Object.seal(constructor) and Object.freeze(constructor) do not work at the moment!!!

// function seal(constructor: Function, context: ClassDecoratorContext) {
//     Object.seal(constructor);
//     Object.seal(constructor.prototype);
// }

// function frozen(constructor: Function, context: ClassDecoratorContext) {
//     Object.freeze(constructor);
//     Object.freeze(constructor.prototype);
// }