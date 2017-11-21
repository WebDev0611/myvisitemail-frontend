export class User {
    eMail: string;
    password: string;

    firstName: string;
    lastName: string;

    isAuth: boolean;
    isAdmin: boolean;

    avatar: any;

    constructor() {
        this.isAuth = false;
        this.isAdmin = false;
    }
}
