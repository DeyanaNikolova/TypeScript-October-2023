type Address = {
    city: string;
        street: string;
        suite: string;
        zipcode: string;
        geo: Geo;    
}

type Geo = {
    lat: string;
    lng: string;
}

type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
}

export type User = {
        id: number;
        name: string;
        username:string;
        email:string;
        address: Address
        phone:string;
        website: string;
        company: Company;  
}