export interface IEmailMessage {
    message: string;
    address: string;
}

export class EmailMessage implements IEmailMessage {
    message: string;
    address: string;

    constructor() {
        this.address = '';
        this.message = '';
    }
}
