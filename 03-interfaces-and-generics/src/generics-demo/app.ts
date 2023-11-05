const getTest = <T>(paramId: T): T => {
  return paramId;
};

const id1 = <number>1;
const id2 = getTest<string>("sfsgsd");
const ids = getTest<number[]>([1, 2, 3]);

type UserData<T> = {
  name: string;
  age: number;
  address: string;
  id: T;
};
const x = getTest<UserData<number>>({ 
    name: "Ivan", 
    age: 23, 
    address: "Sofia, Bulgaria",
    id:12
});

const y = getTest<UserData<string>>({ 
    name: "Ivan", 
    age: 23, 
    address: "Sofia, Bulgaria",
    id: 'asdasd'
});
