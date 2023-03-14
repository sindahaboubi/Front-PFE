import { Membre } from "./membre";
import { Projet } from "./projet";

export class Role {

    public id?:number //identifiant de role
    public type ?:string // type de role ::::: PO,dev team .. 
    public permission ?:string; //les fonctionalite qui peut effectuer sur le projet
    public description?:string;//description du role
    public membre?:Membre //qui a le role
    public projet?:Projet;//dons quelle projet
    
}
