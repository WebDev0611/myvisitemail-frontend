import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DialogService {
    isOpened: BehaviorSubject<boolean>;

    constructor() {
        this.isOpened = new BehaviorSubject<boolean>(false);
    }

    open() {
        this.isOpened.next(true);
    }

    close() {
        this.isOpened.next(false);
    }
}
