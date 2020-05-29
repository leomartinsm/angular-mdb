import { Role } from "./role";

    export class User {
    id: number;
    racf: string;
    password: string;
    nome: string;
    funcional: string;
    role: Role;
    token?: string;
}