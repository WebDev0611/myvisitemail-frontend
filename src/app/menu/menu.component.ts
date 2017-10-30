import { Component, OnInit, ElementRef } from '@angular/core';
import { UserPanelService } from './user-panel/user-panel.service';
import { User } from '../shared/models/user.models';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    user: User;
    title: string;

    constructor(private el: ElementRef, private userPanelService: UserPanelService) {
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
        this.userPanelService.getUser()
        .then(user => {
            this.user = user;
        })
        .catch(error => {
            console.error(error);
        });
    }
}
