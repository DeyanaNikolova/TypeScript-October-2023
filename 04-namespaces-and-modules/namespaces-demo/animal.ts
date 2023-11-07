namespace AnimalGroup {
   export class Animal {
        furColor: string;
        type: string;

        constructor(furColor: string, type: string){
            this.furColor = furColor;
            this.type = type;
        }

        getAnimalDetails(){
            return `This animal is of type ${this.type} and it has fur color ${this.furColor}`
        }
    }
}