import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserService } from '../core/services/user-service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LockScreenService {
    timer: NodeJS.Timer;
    listener: any;
    lockAfter: number; // ms

    isLocked: BehaviorSubject<boolean>;
    constructor(private userService: UserService, private router: Router) {
        this.listener = this.resetTimer.bind(this);
        this.lockAfter = 5000;
        this.isLocked = new BehaviorSubject<boolean>(false);
    }

    init() {
        if (!this.timer) {
            this.addListeners();
            this.setTimer();
        }
    }

    addListeners() {
        window.addEventListener('load', this.listener);
        window.addEventListener('mousemove', this.listener);
        window.addEventListener('click', this.listener);
        window.addEventListener('scroll', this.listener);
        window.addEventListener('keypress', this.listener);
    }

    removeListeners() {
        window.removeEventListener('load', this.listener);
        window.removeEventListener('mousemove', this.listener);
        window.removeEventListener('click', this.listener);
        window.removeEventListener('scroll', this.listener);
        window.removeEventListener('keypress', this.listener);
    }

    setTimer() {
        this.timer = setTimeout(() => {
            this.lockScreen();
        }, this.lockAfter);
    }

    resetTimer() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
            this.setTimer();
        }
    }

    lockScreen() {
        if (this.userService.getUser().isAuth && this.isLocked.getValue() === false) {
            this.userService.lockUser();
            this.isLocked.next(true);
            clearTimeout(this.timer);
            this.router.navigateByUrl('lock');
        }
    }

    unlockScreen() {
        if (this.userService.getUser().isAuth && this.isLocked.getValue() === true) {
            this.isLocked.next(false);
            this.setTimer();
            this.router.navigateByUrl('home');
        }
    }
}
