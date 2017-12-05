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
}
