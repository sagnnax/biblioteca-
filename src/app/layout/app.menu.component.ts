import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Menú',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/pages/home'] },
                    {label: 'Usuarios',icon: 'pi pi-fw pi-users',routerLink: ['/pages/usuarios']},
                    { label: 'Préstamos y devoluciones', icon: 'pi pi-fw pi-id-card', routerLink: ['/pages/prestamos'] },
                    { label: 'Colecciones', icon: 'pi pi-fw pi-list', routerLink: ['/pages/colecciones'] },
                ]
            }
        ];
    }
}
