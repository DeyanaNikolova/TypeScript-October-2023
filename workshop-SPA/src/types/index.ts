export type Address = {
    city: string;
        street: string;
        suite: string;
        zipcode: string;
        geo: Geo;    
}

export type Geo = {
    lat: string;
    lng: string;
}

export type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
}