export interface ICustomer {
    id: string;
}
export interface IResortCustomer extends ICustomer {
    id: string;

    name: string;
    position: string;
    email: string;
    rooms: number;
    lastSent: string;
    invoice: string;
}
export interface IResortCustomerDetails extends IResortCustomer {
    id: string;

    name: string;
    position: string;
    email: string;
    rooms: number;
    lastSent: string;
    invoice: string;

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
    lastSent: string;
    invoice: string;

    phone: string;
    emailsSent: number;
    emailsOpened: number;
    bounceRate: number;
    cancellations: number;
    lastWeek: number;

    profileBkg: string;
}

export class Customer {
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

    public set customerName(value: string) {
        this._customerName = value;
    }

    public set position(value: string) {
        this._position = value;
    }

    public set emailAddres(value: string) {
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

    public get customerName(): string {
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

// export interface ICustomer {
//     company: ICompany;
//     person: IContactInfo;
// }

// export interface ICompany {
//     name: string;
//     email: string;
//     phone: string;
//     address: string;
//     area: string; // should it be here?
// }

// export interface IContactInfo {
//     name: string;
//     email: string;
//     phone: string;
// }

// export interface IDetailCustomer {
//     name: string;
//     position: string;
//     office: string;
//     age: number;
//     startDate: string;
//     invoice: string; // maybe number?

//     resortId: string; // verify this
// }

// export class Customer implements ICustomer {
//     company: ICompany;
//     person: IContactInfo;

//     constructor() {
//         this.company = new Company();
//         this.person = new ContactInfo();
//     }
// }

// export class Company implements ICompany {
//     name: string;
//     email: string;
//     phone: string;
//     address: string;
//     area: string;
// }

// export class ContactInfo implements IContactInfo {
//     name: string;
//     email: string;
//     phone: string;
// }

// export class DetailCustomer implements IDetailCustomer {
//     name: string;
//     position: string;
//     office: string;
//     age: number;
//     startDate: string;
//     invoice: string; // maybe number?
//     resortId: string;
// }
