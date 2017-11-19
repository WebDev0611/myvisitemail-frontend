import { Component, OnInit, ElementRef } from '@angular/core';
import { User } from '../shared/models/user.models';
import { UserService } from '../core/services/user-service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    user: User;
    title: string;

    constructor(private el: ElementRef, private userService: UserService) {
        this.title = 'HOME';
        this.user = new User();
    }

    ngOnInit() {
        this.removeHostElement();
        this.getUser();
    }

    private removeHostElement() {
        const nativeElement: HTMLElement = this.el.nativeElement,
        parentElement: HTMLElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.children.length > 0) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    }
    private getUser() {
        this.user = this.userService.getUser();
        // debugger
        this.user.avatar = this.user.avatar || 'img/avatar1.jpg';
    }
}
