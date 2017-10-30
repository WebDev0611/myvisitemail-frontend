import { Component, OnInit } from '@angular/core';
import { UserPanelService } from './user-panel.service';
import { User } from '../../shared/models/user.models';

@Component({
    selector: 'app-menu-user-panel',
    templateUrl: './user-panel.component.html',
    styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {
    user: User;
    constructor(private componentService: UserPanelService) {
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
        this.componentService.getUser()
            .then(user => {
                this.user = user;
            })
            .catch(error => {
                console.error(error);
            });
    }
}
