import { Component, OnInit } from '@angular/core';
import { LockScreenService } from './lock-screen.service';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../core/services/user-service';
import { User } from '../shared/models/user.models';

@Component({
    selector: 'app-lock-screen',
    templateUrl: './lock-screen.component.html',
    styleUrls: ['./lock-screen.component.scss'],
    providers: [LockScreenService]
})
export class LockScreenComponent implements OnInit {
    isLocked: boolean;
    subscribtion: Subscription;
    user: User;

    constructor(private componentService: LockScreenService, private userService: UserService) {
        this.isLocked = true;
    }

    ngOnInit() {
        this.user = this.userService.getUser();
    }
}
