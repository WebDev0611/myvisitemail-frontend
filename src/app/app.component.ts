import { Component, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './core/auth/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isAuth: boolean;
    constructor(private authService: AuthService, private renderer: Renderer2) {
        this.isAuth = this.authService.isAuthenticated();
        if (!this.isAuth) {
            this.renderer.addClass(document.body, 'auth-wrapper');
        }
    }
}
