import { Component } from '@angular/core';
import { UserPanelService } from './user-panel.service';

@Component({
    selector: 'app-menu-user-panel',
    templateUrl: './user-panel.component.html',
    styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent {

    constructor(private componentService: UserPanelService) {

    }

    logOut() {

    }

}
