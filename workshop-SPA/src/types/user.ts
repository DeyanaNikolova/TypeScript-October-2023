import { Address } from "./index";
import { Company } from "./index";

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