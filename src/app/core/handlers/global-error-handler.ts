import { ErrorHandler, Injectable} from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor() {}

    handleError(error: any) {
        console.error(error);
        // IMPORTANT: Rethrow the error otherwise it gets swallowed
        // Change it if needed
        throw error;
    }
}
