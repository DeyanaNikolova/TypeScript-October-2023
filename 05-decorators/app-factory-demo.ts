type Task = {
  name: string;
  level: "low" | "medium" | "complex";
};

class Employee {
    @withTask({ name: 'Task1', level: 'complex'})
  tasks: Task[] = [];

  @withComplexTasks()
  extraTasks: Task[] = [];
}

const employee = new Employee();
console.log(employee);

function withTask(task: Task) {
  return function <T, V extends Task[]>(
    target: undefined,
    context: ClassFieldDecoratorContext<T, V>
  ) {
    return function (args: V) {
        args.push(task);
        return args;
    }
  };
}

function withComplexTasks() {
    return withTask({name: 'Some other task', level: 'complex'})
}
