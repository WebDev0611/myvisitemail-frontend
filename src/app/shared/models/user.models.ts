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

    get name(): string {
        return `${this.firstName || ''} ${this.lastName || ''}`.trim();
    }

    get userRole(): string {
        return !this.isAuth ? 'Guest' :
            this.isAdmin ? 'Administrator' : 'User';
    }
}
