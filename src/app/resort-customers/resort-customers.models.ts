export interface ICustomer {
    id: string;
}
export interface IResortCustomer extends ICustomer {
    id: string;

    name: string;
    type: string;
    email: string;
    rooms: number;
    lastSent: Date;
    invoice: number;

    area: string;
    profileBkg: string;
}
export interface IResortCustomerDetails extends IResortCustomer {
    id: string;

    name: string;
    type: string;
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
    type: string;
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
    area: string;
}

export class ResortCustomer implements IResortCustomer {
    id: string;
    area: string;
    profileBkg: string;

    private _customerName: string;
    private _type: string;
    private _emailAddres: string;
    private _rooms: number;
    private _lastSent: Date;
    private _invoice: number;
    private _mailingReports: Array<Object>;

    constructor(name, type, email, rooms, mailingReports, invoice) {
        this._customerName = name;
        this._type = type;
        this._emailAddres = email;
        this._rooms = rooms;
        this._invoice = invoice;
        this._mailingReports = mailingReports;
        if (mailingReports) {
            this._lastSent = new Date(mailingReports[0].send_time);
        }
    }

    public set name(value: string) {
        this._customerName = value;
    }

    public set type(value: string) {
        this._type = value;
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

    public get type(): string {
        return this._type;
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
