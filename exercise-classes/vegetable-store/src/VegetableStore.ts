type Vegy = {
  type: string;
  quantity: number;
  price: number;
};

// ["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]

export class VegetableStore {
  private owner: string;
  private location: string;
  private availableProducts: Vegy[];

  constructor(owner: string, location: string) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }

  loadingVegetables(vegetables: string[]): string{
    const allTypes: string[] = [];

    for (let vegy of vegetables) {
      const [type, qtyAsString, priceAsString] = vegy.split(" ");
      const quantity = Number(qtyAsString);
      const price = Number(priceAsString);

      const product = this.availableProducts.find((p) => p.type === type);
      if (!product) {
        this.availableProducts.push({ type, quantity, price });
        allTypes.push(type);
      }else{
       product.quantity += quantity;
       if(product.price < price){
        product.price = price;
       }
      }
    }
    return `Successfully added ${allTypes.join(', ')}`;
  }

  buyingVegetables(selectedProducts: string[]): string{
    let totalPrice = 0

    for(let item of selectedProducts){
        const [type, qtyAsString] = item.split(' ');
      const  quantity = Number(qtyAsString);

      const product = this.availableProducts.find((p) => p.type === type);
      if(!product){
        throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
      }

      if(product.quantity  < quantity){
        throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`); 
      }
      const price = quantity * product.price;
      product.quantity -= quantity;
      totalPrice += price; 
    }

    return `Great choice! You must pay the following amount$${totalPrice.toFixed(2)}.`;
  }

  rottingVegetable(type: string, quantity: number): string {
    const product = this.availableProducts.find(p => p.type == type);
    if (!product) {
        throw new Error(`${type} is not available in the store.`);
    }

    if (product.quantity < quantity) {
        product.quantity = 0;
        return `The entire quantity of the ${type} has been removed.`;
    }
    product.quantity -= quantity;
    return `Some quantity of the ${type} has been removed.`;
}


revision(): string {
    const result = ['Available vegetables:'];
    this.availableProducts.sort((a, b) => a.price - b.price).forEach(p => {
        result.push(`${p.type}-${p.quantity}-$${p.price}`);
    });
    result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

    return result.join('\n');
}

}
