import { Component, OnInit } from '@angular/core';
import { UserPanelService } from './user-panel.service';
import { User } from '../../shared/models/user.models';
import { UserService } from '../../core/services/user-service';

@Component({
    selector: 'app-menu-user-panel',
    templateUrl: './user-panel.component.html',
    styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {
    user: User;
    constructor(private componentService: UserPanelService, private userService: UserService) {
        this.user = new User();
    }

    ngOnInit() {
        this.getUser();
    }

    profileDetail() {

    }

    logOut() {

    }

    private getUser(): void {
        this.user = this.userService.getUser();
    }
}
