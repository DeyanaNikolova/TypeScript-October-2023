import { Address, Company } from "./common";

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