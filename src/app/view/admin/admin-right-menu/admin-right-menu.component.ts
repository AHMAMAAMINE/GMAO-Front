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
        label: 'Company-Client', icon: 'pi pi-fw pi-tablet', routerLink: ['admin-company-client']
      } ,
      {
        label: 'Projet-Global', icon: 'pi pi-fw pi-briefcase', routerLink: ['admin-projet-global']
      } ,
      {
        label: 'Factures Et Paiements', icon: 'pi pi-fw pi-check-square', routerLink: ['admin-factures-paiements']
      } ,

      {
        label: 'Budgets', icon: 'pi pi-fw pi-dollar', items :
            [
              {label: 'Nouveau budget', icon: 'pi pi-fw pi-list', routerLink: ['budget-create']},
              {label: 'Demmandes', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['budget-demmande-list']},
            ]
      },
      {
        label: 'Agencies', icon: 'pi pi-fw pi-tablet', routerLink: ['agence-list']
      },

    ];
  }

  onMenuClick(event) {
    this.appMain.onMenuClick(event);
  }

}
