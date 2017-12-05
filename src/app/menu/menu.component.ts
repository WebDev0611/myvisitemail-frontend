import { Component, OnInit, ElementRef } from '@angular/core';
import { User } from '../shared/models/user.models';
import { UserService } from '../shared/services/user-service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
    isAuth: boolean;
    user: User;

    constructor(private el: ElementRef, private userService: UserService) {
        this.user = new User();
        this.isAuth = true;
    }

    ngOnInit() {
        this.userService.isAuth.subscribe(isAuth => {
            this.isAuth = isAuth;
            this.user = this.userService.getUser();
        });
    }
}
