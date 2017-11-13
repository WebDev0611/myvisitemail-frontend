import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileObject } from '../../shared/models/common.models';


@Injectable()
export class FileService {
    constructor(private http: HttpClient) { }

    getFile(id?: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            const endpoint = `file${id ? '/' + id : ''}`;
            this.http.get(endpoint)
                .toPromise()
                .then(file => resolve(file))
                .catch(error => reject(error));
        });
    }

    sendFile(file: FileObject): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.http.post('file', {
                file: file.file,
                contentType: file.contentType,
                fileType: file.fileType
            })
            .toPromise()
            .then(result => resolve(result))
            .catch(error => reject(error));
        });
    }

    updateFile(file: FileObject): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.http.put('file', {
                file: file.file,
                contentType: file.contentType,
                fileType: file.fileType
            })
            .toPromise()
            .then(result => resolve(result))
            .catch(error => reject(error));
        });
    }

    deleteFile(id: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.http.delete(`file/${id}`)
                .toPromise()
                .then(file => resolve(file))
                .catch(error => reject(error));
        });
    }
}
