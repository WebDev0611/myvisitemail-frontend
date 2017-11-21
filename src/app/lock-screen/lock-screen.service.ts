import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserService } from '../core/services/user-service';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login/login.service';
import { User } from '../shared/models/user.models';

@Injectable()
export class LockScreenService {
    timer: NodeJS.Timer;
    listener: any;
    lockAfter: number; // ms

    constructor(private userService: UserService, private loginService: LoginService, private router: Router) {
        this.listener = this.resetTimer.bind(this);
        this.lockAfter = 5000;
    }

    init() {
        if (!this.timer) {
            this.initialize();
        }
    }

    lockScreen() {
        if (this.userService.getUser().isAuth && !this.userService.isLocked) {
            this.userService.lockUser(this.router.url);

            this.dispose();
            this.router.navigateByUrl('lock');
        }
    }

    unlockScreen(user: User): Promise<User> {
        if (this.userService.isLocked) {
            return this.loginService.login(user);
        }
    }

    navigateToLogin() {
        this.router.navigateByUrl('login');
    }

    navigateToPrevious(prevUrl: string) {
        this.initialize();
        this.router.navigate([prevUrl]);
    }

    private initialize() {
        window.addEventListener('load', this.listener);
        window.addEventListener('mousemove', this.listener);
        window.addEventListener('click', this.listener);
        window.addEventListener('scroll', this.listener);
        window.addEventListener('keypress', this.listener);

        this.setTimer();
    }

    private dispose() {
        clearTimeout(this.timer);

        window.removeEventListener('load', this.listener);
        window.removeEventListener('mousemove', this.listener);
        window.removeEventListener('click', this.listener);
        window.removeEventListener('scroll', this.listener);
        window.removeEventListener('keypress', this.listener);
    }

    private setTimer() {
        this.timer = setTimeout(() => {
            this.lockScreen();
        }, this.lockAfter);
    }

    private resetTimer() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
            this.setTimer();
        }
    }
}
