import { Component, OnInit } from '@angular/core';
import { UserPanelService } from './user-panel.service';
import { User } from '../../shared/models/user.models';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user-service';

@Component({
    selector: 'app-menu-user-panel',
    templateUrl: './user-panel.component.html',
    styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {
    user: User;
    constructor(private componentService: UserPanelService, private userService: UserService,
        private router: Router) {
        this.user = new User();
    }

    ngOnInit() {
        this.getUser();
    }

    profileDetail() {

    }

    logOut() {
        this.userService.setUser(new User());
        this.router.navigateByUrl('/login');
    }

    private getUser(): void {
        this.user = this.userService.getUser();
    }
}
