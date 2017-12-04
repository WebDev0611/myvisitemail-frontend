export class User {
    eMail: string;
    password: string;

    firstName: string;
    lastName: string;

    isAuth: boolean;
    isAdmin: boolean;

    avatarId: string;

    constructor() {
        this.isAuth = false;
        this.isAdmin = false;
    }
}
