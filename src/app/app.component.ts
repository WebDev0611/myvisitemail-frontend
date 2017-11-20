import { Component, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './core/services/user-service';
import { LockScreenService } from './lock-screen/lock-screen.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isAuth: boolean;
    isLocked: boolean;

    wrapperClassName: string;
    containerClassName: string;

    wrapperClasses: any;
    containerClasses: any;

    constructor(private userService: UserService, private renderer: Renderer2,
        private lockScreenService: LockScreenService) {
        this.isAuth = false;

        this.wrapperClasses = {
            auth: 'all-wrapper menu-side with-side-panel',
            notAuth: 'all-wrapper menu-side with-pattern'
        };
        this.containerClasses = {
            auth: 'layout-w',
            notAuth: 'auth-box-w' // wider centered
        };

        this.wrapperClassName = this.wrapperClasses['notAuth'];
        this.containerClassName = this.containerClasses['notAuth'];

        this.subscribe();
    }

    private subscribe() {
        this.userService.isAuth.subscribe(isAuth => {
            if (this.isAuth !== isAuth) {
                this.handleChange(isAuth);
            }
        });

        if (this.isAuth) {
            this.lockScreenService.init();
        }
    }

    private handleChange(isUserAllowed: boolean) {
        isUserAllowed ? this.addClass('auth-wrapper') : this.removeClass('auth-wrapper');
        this.isAuth = isUserAllowed;
        const key = isUserAllowed ? 'auth' : 'notAuth';
        this.wrapperClassName = this.wrapperClasses[key];
        this.containerClassName = this.containerClasses[key];

        console.log('auth', isUserAllowed);
    }

    private addClass(cls: string): void {
        this.renderer.addClass(document.body, cls);
    }

    private removeClass(cls: string): void {
        this.renderer.removeClass(document.body, cls);
    }
}
