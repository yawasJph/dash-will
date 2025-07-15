
export class User {
    constructor(name,email,pass){
        this.name = name;
        this.email = email;
        this.pass = pass;
    }
    get Name() {
        return this.name;
    }
    get Email() {
        return this.email;
    }
    get Pass() {
        return this.pass;
    }
    set Name(name) {
        this.name = name;
    }
    set Email(email) {
        this.email = email;
    }
    set Pass(pass) {
        this.pass = pass;
    }
    toString() {
        return `Name: ${this.name}, Email: ${this.email}, Password: ${this.pass}`;
    }
    toJSON() {
        return {
            name: this.name,
            email: this.email,
            pass: this.pass
        };
    }
    
}