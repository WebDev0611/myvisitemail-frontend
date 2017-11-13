import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from '../shared/models/user.models';
import { UserService } from '../core/services/user-service';
import { element } from 'protractor';
import { isUser, getErrorMessage } from '../shared/shared.utilities';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    credentials: User;
    errorMessage: string;

    constructor(private componentService: LoginService, private userService: UserService,
        private router: Router) {
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
                debugger
                this.handleUnsuccessfulLogin(getErrorMessage(error));
            });
    }

    private handleSuccessfulLogin(user: User) {
        this.errorMessage = '';
        user.isAuth = true;

        this.userService.setUser(user);
        this.router.navigateByUrl('/home'); // todo: replace with loader
        // todo: find out why reload is necessery for router to be working with routerLinks
        document.location.href = '/home';
    }

    private handleUnsuccessfulLogin(errorMsg?: string) {
        // todo: handle properly
        this.errorMessage = errorMsg || 'Login failed';
    }
}
