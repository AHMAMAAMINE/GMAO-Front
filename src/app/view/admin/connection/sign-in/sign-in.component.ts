import { Component, OnInit } from '@angular/core';
import {Admin} from '../../../../controller/model/admin.model';
import {AdminService} from '../../../../controller/service/admin.service';
import {Router} from '@angular/router';
import { MessageService } from 'primeng/api';
import {UserService} from '../../../../controller/service/user.service';
import {User} from '../../../../controller/model/user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [MessageService]
})
export class SignInComponent implements OnInit {


  constructor(private adminService: UserService,
              private router: Router,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  get selected(): User {
    return this.adminService.User;
  }

  set selected(value: User){
    this.adminService.User = value;
  }

  public signIn(){
    this.adminService.seConnecter(this.selected.login,this.selected.password);
  }
}
