export enum FileType {
    UserAvatar = 0, // marge it with Image?
    Image = 1,
    Video = 2,
    Document = 3,
    Other = 4
}

export class FileObject {
    constructor(
        public file: any,
        public fileType: FileType = FileType.Other,
        public contentType: string = 'application/json'
    ) {}
}
