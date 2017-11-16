export class AppError {
    status: number;
    title: string;
    description: string;
}

export enum FileType {
    UserAvatar = 0, // marge it with Image?
    Image = 1,
    Video = 2,
    Document = 3,
    Other = 4
}

export class FileObject {
    id: string;
    _id: string;
    constructor(
        public file: any,
        public fileType: FileType = FileType.Other,
        public contentType: string = 'application/json'
    ) {
        this._id = null;
    }
}

export class Page {
    constructor(public pageNo: number) { }
}
