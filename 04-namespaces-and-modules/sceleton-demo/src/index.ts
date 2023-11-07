import { Engine } from "./interfaces/Car";

const engine1: Engine = {
  horsPowers: 120,
  make: "WV",
};

const engine2: Engine = {
  horsPowers: 220,
  make: "BMW",
};

console.log(engine1);
console.log(engine2);

for (let index = 0; index < 10; index++) {
  console.log(index + 1);
}
