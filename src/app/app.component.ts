import { Component, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './core/services/user-service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isAuth: boolean;
    constructor(private userService: UserService, private renderer: Renderer2) {
        this.isAuth = false;
        this.subscribe();
    }

    private subscribe() {
        this.userService.isAuth.subscribe(isAuth => {
            isAuth ? this.addClass('auth-wrapper') : this.removeClass('auth-wrapper');
            this.isAuth = isAuth;
        });
    }

    private addClass(cls: string): void {
        this.renderer.addClass(document.body, cls);
    }

    private removeClass(cls: string): void {
        this.renderer.removeClass(document.body, cls);
    }
}
