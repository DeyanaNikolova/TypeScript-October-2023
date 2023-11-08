class Person {
  @wachtChange
  accessor project: string = "Simple project";
}

const person = new Person();
console.log(person.project);
person.project = 'More complex projext'


type Accessor<T, V> = {
  get: (this: T) => void;
  set: (this: T, value: V) => void;
};

function wachtChange<T, V>(
  accessor: Accessor<T, V>,
  context: ClassAccessorDecoratorContext
) {
  console.log({ accessor });
  console.log({ context });
  return {
    get: function (this: T) {
        return accessor.get.call(this);
    },
    set: function (this: T, value: V) {
        console.log(`Set ${context.name.toString()} to ${value}`);
        accessor.set.call(this, value);    
    },
  };
}
