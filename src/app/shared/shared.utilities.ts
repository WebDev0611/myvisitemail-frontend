import { User } from './models/user.models';
import { FileObject, FileType } from './models/common.models';


export function isUser(obj: any): obj is User {
    if (obj && (obj instanceof User || obj.eMail !== undefined)) {
        return true;
    }

    return false;
}

export function convertToFileObject(input: HTMLInputElement, type: FileType, mimeType?: string): Promise<FileObject> {
    return new Promise<FileObject>((resolve, reject) => {
        const reader: FileReader = new FileReader();

        if (!input.files || input.files.length === 0) {
            return reject('No files selected!');
        }
        const file = input.files[0];

        reader.onerror = (error) => {
            return reject(error);
        };
        reader.onload = (readerResult) => {
            const parsedFile = readerResult.target['result'];
            const toUpload = {
                file: parsedFile,
                contentType: mimeType || file.type,
                fileType: type
            };
            return resolve(toUpload);
        };
        reader.readAsDataURL(file);
    });

}
