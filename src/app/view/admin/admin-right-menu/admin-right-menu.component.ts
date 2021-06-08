import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../../app.component';
import {AdminMainComponent} from '../admin-main/admin-main.component';

@Component({
  selector: 'app-admin-right-menu',
  templateUrl: './admin-right-menu.component.html',
  styleUrls: ['./admin-right-menu.component.scss']
})
export class AdminRightMenuComponent implements OnInit {

  model: any[];

  constructor(public app: AppComponent, public appMain: AdminMainComponent) { }

  ngOnInit() {
    this.model = [
      {
        label: 'Favorites', icon: 'pi pi-fw pi-home', routerLink: ['/']
      },
      {
        label: 'Interventions', icon: 'pi pi-fw pi-tablet', routerLink: ['view/commande']
      } ,
      {
        label: 'stock', icon: 'pi pi-fw pi-briefcase', routerLink: ['view/stock']
      } ,
      {
        label: 'equipes', icon: 'pi pi-fw pi-check-square', routerLink: ['view/equipes']
      } ,
      {
        label: 'operation stock', icon: 'pi pi-fw pi-tablet', routerLink: ['view/operation']
      },

    ];
  }

  onMenuClick(event) {
    this.appMain.onMenuClick(event);
  }

}
