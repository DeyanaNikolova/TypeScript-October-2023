import { Cloth } from "./Cloth";

export class Magazine {
  type: string;
  capacity: number;
  clothes: Cloth[] = [];

  constructor(type: string, capacity: number) {
    this.type = type;
    this.capacity = capacity;
  }

  addCloth(cloth: Cloth): void {
    if (this.clothes.length < this.capacity) {
      this.clothes.push(cloth);
    }
  }

  removeCloth(color: string): boolean {
    const index = this.clothes.findIndex((x) => x.color === color);

    if (index !== -1) {
      this.clothes.splice(index, 1);
      return true;
    }
    return false;
  }

  getSmallestCloth(): Cloth {
    const smallestCloth = [...this.clothes].sort((a, b) => a.size - b.size)[0];
    return smallestCloth;
  }

  getCloth(color: string): Cloth {
    const cloth = this.clothes.find((x) => x.color === color);
    return cloth;
  }

  getClothCount(): number {
    const count = this.clothes.length;
    return count;
  }

  report(): string {
    const sorted = this.clothes.sort((a, b) => a.size - b.size);
    const clothesToReport = sorted.map((c) => c.toString()).join("\n");

    const report = `${this.type} magazine contains:\n${clothesToReport}`;
    return report;
  }
}
