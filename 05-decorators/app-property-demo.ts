type Task = {
  name: string;
  level: "low" | "medium" | "complex";
};

class Employee {
  @withMoreTasks
  task: Task[] = [];
}

const employee = new Employee();
console.log(employee);

function withMoreTasks<T, V extends Task[]>(
  target: undefined,
  context: ClassFieldDecoratorContext
  ) {
    return function(args: V){
        args.push({name: 'Added 1 task', level: 'low'});
        args.push({name: 'Added 2 task', level: 'medium'});
        args.push({name: 'Added 3 task', level: 'complex'});
        console.log({ args });
        
      return args;
    };
  }
