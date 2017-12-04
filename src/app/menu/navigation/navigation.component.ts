import { Component } from '@angular/core';

@Component({
    selector: 'app-menu-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

    constructor() {

    }

    openSubMenu(menuElement) {
        if (menuElement.className.indexOf('active') > -1) {
            menuElement.className = menuElement.className.replace('active', '').trim();
        } else {
            menuElement.className += ' active';
        }
    }
}
