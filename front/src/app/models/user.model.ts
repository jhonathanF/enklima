export class User {
    name: string;
    age: number;
    rank: string;
    isAdmin: boolean;
    token: string;

    constructor(name: string, age: number, rank, isAdmin, token?) {
        this.name = name;
        this.age = age;
        this.rank = rank;
        this.isAdmin = isAdmin;
        this.token = token;
    }
}