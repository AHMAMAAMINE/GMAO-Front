import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {CollaborateurService} from '../../controller/service/collaborateur.service';
import {Collaborateur} from '../../controller/model/collaborateur.model';
import {UserService} from '../../controller/service/user.service';
import {Router} from '@angular/router';
import {User} from '../../controller/model/user.model';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  providers: [MessageService],
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private collaborateurService: CollaborateurService, private userService: UserService) { }
  get user(): User {
    return this.userService.User;
  }
  set user(value: User) {
    this.userService.User = value;
  }

  get collaborateur(): Collaborateur {
    return this.collaborateurService.collaborateur;
  }

  set collaborateur(value: Collaborateur) {
    this.collaborateurService.collaborateur = value;
  }

  code: string;
   verif = false;


  ngOnInit(): void {
  }

  verification() {
    if (!this.verif) {
      this.userService.testerLeCode(this.code, this.userService.code).subscribe(data => {
        this.verif = data === 1;
      });
    }
    else {
      this.userService.update(this.user.password).subscribe(data => console.log(data));
    }
  }
}
