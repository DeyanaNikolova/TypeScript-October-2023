import { Drink } from "./Drink";
import { VendingMachine } from "./VendingMachine";

function main() {
  const vendingMachine = new VendingMachine(6);
  const tea = new Drink("Tea", 1.5, 300);
}

main();
