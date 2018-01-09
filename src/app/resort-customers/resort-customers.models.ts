import { IMailchimpReportData } from '../shared/models/mailchimp.models';

export interface ICustomerContact {
    name: string;
    email: string;
    phone: string;
    address: string;
}

export class CustomerContact implements ICustomerContact {
    name: string;
    email: string;
    phone: string;
    address: string;

    constructor() {
        this.address = '';
        this.email = '';
        this.name = '';
        this.phone = '';
    }
}

export class Metadata {
    creationDate: number;
    updateDate: number;

    constructor() {
        this.creationDate = new Date().getTime();
        this.updateDate = new Date().getTime();
    }
}

export interface IResortCustomer {
    contact: ICustomerContact;
    type: string;
    area: string;
    rooms: number;
    invoice: number;
    backgroundId: string;
}

export interface ITemplateData {
    templateId: string;
    html: string;
}

export interface IDbTemplate {
    name: string;
    html: string;
    folder_id: string; // folder_id
}

export class ResortCustomer implements IResortCustomer {
    _id: string;
    contact: ICustomerContact;
    type: string;
    area: string;
    rooms: number;
    lastSent: Date;
    invoice: number;
    reports: IMailchimpReportData[];
    backgroundId: string;
    metadata: Metadata;
    templateFolderId: string;
    booked: ITemplateData;
    'check-in': ITemplateData;
    'check-out': ITemplateData;
    cancellation: ITemplateData;


    constructor() {
        this._id = '';
        this.contact = new CustomerContact();
        this.type = '';
        this.area = '';
        this.rooms = 0;
        this.lastSent = new Date();
        this.invoice = 0;
        this.reports = [];
        this.metadata = new Metadata();
    }

    public getPostObject(): IResortCustomer {
        return {
            contact: this.contact,
            type: this.type,
            area: this.area,
            rooms: this.rooms,
            invoice: this.invoice,
            backgroundId: this.backgroundId
        };
    }
}
