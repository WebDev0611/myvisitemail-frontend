export class User {
    userName: string;
    password: string;

    firstName: string;
    lastName: string;
    eMail: string;

    isAuth: boolean;
    isAdmin: boolean;

    constructor() {
        this.isAuth = false;
        this.isAdmin = false;
    }
}
