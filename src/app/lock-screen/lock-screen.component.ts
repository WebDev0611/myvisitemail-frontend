import { Component, OnInit } from '@angular/core';
import { LockScreenService } from './lock-screen.service';
import { UserService } from '../core/services/user-service';
import { User } from '../shared/models/user.models';

@Component({
    selector: 'app-lock-screen',
    templateUrl: './lock-screen.component.html',
    styleUrls: ['./lock-screen.component.scss'],
    providers: [LockScreenService]
})
export class LockScreenComponent implements OnInit {
    isLocked: boolean;
    errorMessage: string;
    user: User;

    constructor(private componentService: LockScreenService, private userService: UserService) {
        this.isLocked = true;
        this.errorMessage = '';
    }

    ngOnInit() {
        this.user = this.userService.getUser();
    }

    unlockUser(password: string) {
        this.user.password = password;

        this.componentService.unlockScreen(this.user)
            .then(user => {
                const prevUrl = this.userService.unlockUser(user);
                this.componentService.navigateToPrevious(prevUrl);
            })
            .catch(error => {
                this.errorMessage = error.error;
            });

    }

    relogUser() {
        this.userService.setUser(new User());
        this.componentService.navigateToLogin();
    }
}
