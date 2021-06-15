import { Component, OnInit } from '@angular/core';
import {AdminMainComponent} from '../admin-main/admin-main.component';
import {AppComponent} from '../../../app.component';
import {AdminService} from '../../../controller/service/admin.service';
import {Admin} from '../../../controller/model/admin.model';
import {UserService} from '../../../controller/service/user.service';

@Component({
  selector: 'app-admin-top-bar',
  templateUrl: './admin-top-bar.component.html',
  styleUrls: ['./admin-top-bar.component.scss']
})
export class AdminTopBarComponent implements OnInit {

  constructor(public app: AppComponent, public appMain: AdminMainComponent, private service: AdminService,private userService: UserService) {}


  get selected(): Admin {
    return this.service.selected;
  }

  set selected(value: Admin) {
    this.service.selected = value;
  }

  ngOnInit(): void {
  }

    sedeconnecte() {
        this.userService.User = null;
    }

}
