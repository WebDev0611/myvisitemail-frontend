import {IMailchimpReportData} from "../shared/models/mailchimp.models";

class customerContact {
    private _name: string;
    private _email: string;
    private _phone: string;

    constructor () {
        this._name = '';
        this._email = '';
        this._phone = '';
    }

    public getPostObject (): Object {
        return {
            name: this.name,
            email: this.email,
            phone: this.phone
        }
    }

    public get name() {
        return this._name;
    }

    public set name(value) {
        this._name = value;
    }

    public get email() {
        return this._email;
    }

    public set email(value) {
        this._email = value;
    }

    public get phone() {
        return this._phone;
    }

    public set phone(value) {
        this._phone = value;
    }
}

class Company extends customerContact {
    private _address: string;

    constructor() {
        super();
        this._address = '';
    }

    public getPostObject (): Object {
        let returnData = super.getPostObject();
        returnData['address'] = this.address;
        return returnData;
    }

    public get address(): string {
        return this._address;
    }

    public set address(value: string) {
        this._address = value;
    }
}

class Metadata {
    private _creationDate: number;
    private _updateDate: number;

    constructor() {
        this._creationDate = new Date().getTime();
        this._updateDate = new Date().getTime();
    }

    public get creationDate(): number {
        return this._creationDate;
    }

    public set creationDate(value: number) {
        this._creationDate = value;
    }

    public get updateDate(): number {
        return this._updateDate;
    }

    public set updateDate(value: number) {
        this._updateDate = value;
    }
}

export class ResortCustomer {
    private __id: string;
    private _company: Company;
    private _contact: customerContact;
    private _type: string;
    private _area: string
    private _rooms: number;
    private _lastSent: Date;
    private _invoice: number;
    private _reports: Array<IMailchimpReportData>;
    private _backgroundId: string;
    private _metadata: Metadata;


    constructor() {
        this.__id = '';
        this._company = new Company();
        this._contact = new customerContact();
        this._type = '';
        this._area = '';
        this._rooms = 0;
        this._lastSent = new Date();
        this._invoice = 0;
        this._reports = [];
        this._metadata = new Metadata();
    }

    public getPostObject (): Object {
        return {
            company: this.company.getPostObject(),
            contact: this.contact.getPostObject(),
            type: this.type,
            area: this.area,
            rooms: this.rooms,
            invoice: this.invoice,
            backgroundId: this.backgroundId
        }
    }

    public get _id(): string {
        return this._id;
    }

    public set _id(value: string) {
        this._id = value;
    }

    public get company(): Company {
        return this._company;
    }

    public set company(value: Company) {
        this._company = value;
    }

    public get contact(): customerContact {
        return this._contact;
    }

    public set contact(value: customerContact) {
        this._contact = value;
    }

    public get type(): string {
        return this._type;
    }

    public set type(value: string) {
        this._type = value;
    }

    public get area(): string {
        return this._area;
    }

    public set area(value: string) {
        this._area = value;
    }

    public get rooms(): number {
        return this._rooms;
    }

    public set rooms(value: number) {
        this._rooms = value;
    }

    public get lastSent(): Date {
        return this._lastSent;
    }

    public set lastSent(value: Date) {
        this._lastSent = value;
    }

    public get invoice(): number {
        return this._invoice;
    }

    public set invoice(value: number) {
        this._invoice = value;
    }

    public get reports(): Array<IMailchimpReportData> {
        return this._reports;
    }

    public set reports(value: Array<IMailchimpReportData>) {
        this._reports = value;
    }

    public get backgroundId(): string {
        return this._backgroundId;
    }

    public set backgroundId(value: string) {
        this._backgroundId = value;
    }

    public get metadata(): Metadata {
        return this._metadata;
    }

    public set metadata(value: Metadata) {
        this._metadata = value;
    }
}


// export interface ICustomer {
//     id: string;
// }
// export interface IResortCustomer extends ICustomer {
//     id: string;
//
//     name: string;
//     type: string;
//     email: string;
//     rooms: number;
//     lastSent: Date;
//     invoice: number;
//
//     area: string;
//     profileBkg: string;
// }
// export interface IResortCustomerDetails extends IResortCustomer {
//     id: string;
//
//     name: string;
//     type: string;
//     email: string;
//     rooms: number;
//     lastSent: Date;
//     invoice: number;
//
//     phone: string;
//     emailsSent: number;
//     emailsOpened: number;
//     bounceRate: number;
//     cancellations: number;
//     lastWeek: number;
//
//     profileBkg: string;
// }
// export class ResortCustomerDetails implements IResortCustomerDetails {
//     id: string;
//
//     name: string;
//     type: string;
//     email: string;
//     rooms: number;
//     lastSent: Date;
//     invoice: number;
//
//     phone: string;
//     emailsSent: number;
//     emailsOpened: number;
//     bounceRate: number;
//     cancellations: number;
//     lastWeek: number;
//
//     profileBkg: string;
//     area: string;
// }
//
// export class ResortCustomer implements IResortCustomer {
//     id: string;
//     area: string;
//     profileBkg: string;
//     private _customerName: string;
//     private _type: string;
//     private _emailAddres: string;
//     private _customerName: string;
//     private _position: string;
//     private _emailAddres: string;
//     private _rooms: number;
//     private _lastSent: Date;
//     private _invoice: number;
//     private _mailingReports: Array<Object>;
//
//     constructor (name, position, email, rooms, mailingReports, invoice) {
//         this._customerName = name;
//         this._position = position;
//         this._emailAddres = email;
//         this._rooms = rooms;
//         this._lastSent = new Date(mailingReports[0].send_time);
//         this._invoice = invoice;
//         this._mailingReports = mailingReports;
//     }
//
//     public set name(value: string) {
//         this._customerName = value;
//     }
//
//     public set position(value: string) {
//         this._position = value;
//     }
//
//     public set email(value: string) {
//         this._emailAddres = value;
//     }
//
//     public set rooms(value: number) {
//         this._rooms = value;
//     }
//
//     public set lastSent(value: Date) {
//         this._lastSent = value;
//     }
//
//     public set invoice(value: number) {
//         this._invoice = value;
//     }
//
//     public get name(): string {
//         return this._customerName;
//     }
//
//     public get position(): string {
//         return this._position;
//     }
//
//     public get emailAddres(): string {
//         return this._emailAddres;
//     }
//
//     public get rooms(): number {
//         return this._rooms;
//     }
//
//     public get lastSent(): Date {
//         return this._lastSent;
//     }
//
//     public get invoice(): number {
//         return this._invoice;
//     }
//
//     public get mailingReports(): Array<Object> {
//         return this._mailingReports;
//     }
// }
