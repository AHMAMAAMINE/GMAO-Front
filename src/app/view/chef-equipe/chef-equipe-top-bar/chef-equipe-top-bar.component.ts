import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../../app.component';
import {ChefEquipeMainComponent} from '../chef-equipe-main/chef-equipe-main.component';
import {ChefEquipeService} from '../../../controller/service/chef-equipe.service';
import {ChefEquipe} from '../../../controller/model/chef-equipe.model';
import {User} from '../../../controller/model/user.model';
import {UserService} from '../../../controller/service/user.service';

@Component({
  selector: 'app-chef-equipe-top-bar',
  templateUrl: './chef-equipe-top-bar.component.html',
  styleUrls: ['./chef-equipe-top-bar.component.scss']
})
export class ChefEquipeTopBarComponent implements OnInit {


  constructor(public app: AppComponent, public appMain: ChefEquipeMainComponent, private service: ChefEquipeService, private userService: UserService) {}


  get selected(): ChefEquipe {
    return this.service.selected;
  }

  set selected(value: ChefEquipe) {
    this.service.selected = value;
  }

  get user(): User{
    return  this.userService.User;
  }
  set user(value: User){
    this.userService.User = value;
  }

  ngOnInit(): void {
  }

    sedeconnecter() {
      this.user.login = null;
      this.user.password = null;
      this.user.role=null;
    }
}
