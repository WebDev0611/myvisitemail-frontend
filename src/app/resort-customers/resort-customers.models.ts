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

export class BokunAPIAccess {
    public accessKey: string
    public secretKey: string;

    constructor() {
        this.accessKey = '';
        this.secretKey = '';
    }
}

export class APIAccess {
    public bokun: BokunAPIAccess;

    constructor() {
        this.bokun = new BokunAPIAccess();
    }
}

export interface IResortCustomer {
    contact: ICustomerContact;
    type: string;
    area: string;
    rooms: number;
    invoice: number;
    backgroundId: string;
    APIAccess: APIAccess;
}

export interface ITemplateData {
    templateId: string;
    subject: string;
    html: string;
}

export interface IDbTemplate {
    name: string;
    html: string;
    folder_id: string; // folder_id
}

export interface IMessageTemplate {
    template: IDbTemplate,
    subject: string
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
    APIAccess: APIAccess;
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
        this.APIAccess = new APIAccess();
    }

    public getPostObject(): IResortCustomer {
        return {
            contact: this.contact,
            type: this.type,
            area: this.area,
            rooms: this.rooms,
            invoice: this.invoice,
            backgroundId: this.backgroundId,
            APIAccess: this.APIAccess
        };
    }
}
