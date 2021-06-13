import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';

import {CollaborateurService} from '../../../../controller/service/collaborateur.service';
import {Collaborateur} from '../../../../controller/model/collaborateur.model';
import {User} from '../../../../controller/model/user.model';
import {UserService} from '../../../../controller/service/user.service';

@Component({
  selector: 'app-sign-in-collaborateur',
  templateUrl: './sign-in-collaborateur.component.html',
    providers: [MessageService],
  styleUrls: ['./sign-in-collaborateur.component.scss']
})
export class SignInCollaborateurComponent implements OnInit {

  constructor(private collaborateurService: UserService,
              private router: Router,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  get collaborateur(): User {
    return this.collaborateurService.User;
  }

  set collaborateur(value: User){
    this.collaborateurService.User = value;
  }

  public signIn(){
    this.collaborateurService.seConnecter(this.collaborateur.login, this.collaborateur.password);
  }

}
