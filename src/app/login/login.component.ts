import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from '../shared/models/user.models';
import { UserService } from '../core/services/user-service';
import { element } from 'protractor';


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
                if (result && result instanceof User) {
                    this.handleSuccessfulLogin(result);
                } else {
                    this.handleUnsuccessfulLogin();
                }
            });
    }

    private handleSuccessfulLogin(user: User) {
        // todo: handle properly
        debugger
        this.errorMessage = '';
        this.userService.setUser(user);
        this.router.navigate(['/']);
    }

    private handleUnsuccessfulLogin() {
        // todo: handle properly
        this.errorMessage = 'Login failed';
    }
}
