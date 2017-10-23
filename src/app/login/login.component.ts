import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    title: string;

    constructor(private componentService: LoginService,
                private router: Router) {
        this.title = 'LOGIN';
    }

    private handleSuccessfulLogin() {
      // todo: handle properly
      this.router.navigate(['/']);
  }
}
