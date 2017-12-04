import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../../shared/services/user-service';


@Injectable()
export class LockGuard implements CanActivate {
    constructor(private userService: UserService,
        private router: Router) { }

    canActivate() {
        const user = this.userService.getUser();
        if (!user.isAuth && user.eMail && user.eMail.length > 0) {
            return true;
        }
        this.router.navigateByUrl('/login');

        return false;
    }
}
