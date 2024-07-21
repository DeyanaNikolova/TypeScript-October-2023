function cityTaxes(name: string, population: number, treasury: number) {
  return {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes(): string {
      this.treasury += this.population * this.taxRate;
      return this.treasury.toFixed(2);
    },
    applyGrowth(percentage: number): string {
        this.population += (this.population * percentage)/100;
      return this.population.toFixed(2);
    },
    applyRecession(percentage: number): string {
        this.treasury -= (this.treasury * percentage)/100;
      return this.treasury.toFixed(2);
    },
  };
}

const city = cityTaxes("Tortuga", 7000, 15000);


