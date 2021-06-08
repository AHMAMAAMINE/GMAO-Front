import { Component, OnInit } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label:'Admin',
        icon:'pi pi-fw pi-user',
        items:[
          {
            label:'sign in',
            icon:'pi pi-fw pi-plus',

          },
          {
            label:'Sign up',
            icon:'pi pi-fw pi-plus'
          },
        ]
      },

      {
        label:'Chef equipe',
        icon:'pi pi-fw pi-user',
        items:[
          {
            label:'Sign in',
            icon:'pi pi-fw pi-user-plus',

          },
          {
            label:'sign up',
            icon:'pi pi-fw pi-user-minus',

          },
        ]
      },
      {
        label:'Collaborateur',
        icon:'pi pi-fw pi-user',
        items:[
          {
            label:'Sign in',
            icon:'pi pi-fw pi-user-plus',

          },
          {
            label:'sign up',
            icon:'pi pi-fw pi-user-minus',

          },
        ]
      },
    ];
  }

}
