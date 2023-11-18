export type Plant = {
  plantName: string;
  spaceRequired: number;
  ripe: boolean;
  quantity: number;
};

export type Storage = {
  plantName: string;
  quantity: number;
};

export class Garden {
  private spaceAvailable: number;
  plants: Plant[] = [];
  storage: Storage[] = [];

  constructor(spaceAvailable: number) {
    this.spaceAvailable = spaceAvailable;
  }

  addPlant(plantName: string, spaceRequired: number): string {
    if (this.spaceAvailable < spaceRequired) {
      throw new Error("Not enough space in the garden.");
    }
    const plant: Plant = {
      plantName: plantName,
      spaceRequired: spaceRequired,
      ripe: false,
      quantity: 0,
    };

    this.plants.push(plant);
    this.spaceAvailable -= spaceRequired;

    return `The ${plant.plantName} has been successfully planted in the garden.`;
  }

  ripenPlant(plantName: string, quantity: number): string {
    const plant: Plant | undefined = this.plants.find(
      (x) => x.plantName === plantName
    );
    if (!plant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (plant.ripe === true) {
      throw new Error(`The ${plant.plantName} is already ripe.`);
    }

    if (quantity <= 0) {
      throw new Error("The quantity cannot be zero or negative.");
    }

    plant.ripe = true;
    plant.quantity = quantity;

    if (plant.quantity === 1) {
      return `${plant.quantity} ${plant.plantName} has successfully ripened.`;
    } else {
      return `${plant.quantity} ${plant.plantName}s have successfully ripened.`;
    }
  }

  harvestPlant(plantName: string): string {
    const plant: Plant | undefined = this.plants.find(
      (x) => x.plantName === plantName
    );
    if (!plant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (plant.ripe === false) {
      throw new Error(
        `The ${plant.plantName} cannot be harvested before it is ripe.`
      );
    }

    this.spaceAvailable += plant.spaceRequired;

    this.storage.push({
      plantName,
      quantity: plant.quantity,
    });

    const index = this.plants.indexOf(plant);
    this.plants.splice(index, 1);

    return `The ${plant.plantName} has been successfully harvested.`;
  }

  generateReport(): string {
    let result: string[] = [];

    const sortedPlants = this.plants
      .sort((a, b) => a.plantName.localeCompare(b.plantName))
      .map((p) => p.plantName);

    const plantRow = `Plants in the garden: ${sortedPlants.join(", ")}`;

    let storageRow = `Plants in the stotage: The storage is empty.`;

    if (this.storage.length > 0) {
      const storagePlants = this.storage.map(
        (p) => `${p.plantName} (${p.quantity})`
      );
      storageRow = ` Plants in the garden: ${storagePlants.join(", ")}`;
    }
    result = [
      `The garden has ${this.spaceAvailable} free space left.`,
      plantRow,
      storageRow,
    ];
    return result.join("\n");
  }
}
