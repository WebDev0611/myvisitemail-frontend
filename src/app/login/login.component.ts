import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from '../shared/models/user.models';
import { UserService } from '../core/services/user-service';
import { isUser, getErrorMessage } from '../shared/shared.utilities';
import { LockScreenService } from '../lock-screen/lock-screen.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    credentials: User;
    errorMessage: string;

    constructor(private componentService: LoginService, private userService: UserService,
        private router: Router, private lockScreen: LockScreenService) {
        this.credentials = new User();
        this.errorMessage = '';
    }

    login() {
        this.componentService.login(this.credentials)
            .then((result: boolean | User) => {
                if (result && isUser(result)) {
                    this.handleSuccessfulLogin(result);
                } else {
                    this.handleUnsuccessfulLogin();
                }
            })
            .catch(error => {
                this.handleUnsuccessfulLogin(getErrorMessage(error));
            });
    }

    private handleSuccessfulLogin(user: User) {
        this.errorMessage = '';
        user.isAuth = true;

        this.userService.setUser(user);
        this.lockScreen.init();

        this.router.navigateByUrl('/home');
    }

    private handleUnsuccessfulLogin(errorMsg?: string) {
        // todo: handle properly
        this.errorMessage = errorMsg || 'Login failed';
    }
}
