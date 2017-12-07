export interface ICustomer {
    id: string;
}
export interface IResortCustomer extends ICustomer {
    id: string;

    name: string;
    position: string;
    email: string;
    rooms: number;
    lastSent: Date;
    invoice: number;
}
export interface IResortCustomerDetails extends IResortCustomer {
    id: string;

    name: string;
    position: string;
    email: string;
    rooms: number;
    lastSent: Date;
    invoice: number;

    phone: string;
    emailsSent: number;
    emailsOpened: number;
    bounceRate: number;
    cancellations: number;
    lastWeek: number;

    profileBkg: string;
}
export class ResortCustomerDetails implements IResortCustomerDetails {
    id: string;

    name: string;
    position: string;
    email: string;
    rooms: number;
    lastSent: Date;
    invoice: number;

    phone: string;
    emailsSent: number;
    emailsOpened: number;
    bounceRate: number;
    cancellations: number;
    lastWeek: number;

    profileBkg: string;
}

export class ResortCustomer implements IResortCustomer {
    id: string;
    private _customerName: string;
    private _position: string;
    private _emailAddres: string;
    private _rooms: number;
    private _lastSent: Date;
    private _invoice: number;
    private _mailingReports: Array<Object>;

    constructor (name, position, email, rooms, mailingReports, invoice) {
        this._customerName = name;
        this._position = position;
        this._emailAddres = email;
        this._rooms = rooms;
        this._lastSent = new Date(mailingReports[0].send_time);
        this._invoice = invoice;
        this._mailingReports = mailingReports;
    }

    public set name(value: string) {
        this._customerName = value;
    }

    public set position(value: string) {
        this._position = value;
    }

    public set email(value: string) {
        this._emailAddres = value;
    }

    public set rooms(value: number) {
        this._rooms = value;
    }

    public set lastSent(value: Date) {
        this._lastSent = value;
    }

    public set invoice(value: number) {
        this._invoice = value;
    }

    public get name(): string {
        return this._customerName;
    }

    public get position(): string {
        return this._position;
    }

    public get emailAddres(): string {
        return this._emailAddres;
    }

    public get rooms(): number {
        return this._rooms;
    }

    public get lastSent(): Date {
        return this._lastSent;
    }

    public get invoice(): number {
        return this._invoice;
    }

    public get mailingReports(): Array<Object> {
        return this._mailingReports;
    }
}
