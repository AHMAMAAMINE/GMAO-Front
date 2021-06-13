import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';

import {CollaborateurService} from '../../../../controller/service/collaborateur.service';
import {Collaborateur} from '../../../../controller/model/collaborateur.model';

@Component({
  selector: 'app-sign-in-collaborateur',
  templateUrl: './sign-in-collaborateur.component.html',
    providers: [MessageService],
  styleUrls: ['./sign-in-collaborateur.component.scss']
})
export class SignInCollaborateurComponent implements OnInit {

  constructor(private collaborateurService: CollaborateurService,
              private router: Router,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  get collaborateur(): Collaborateur {
    return this.collaborateurService.collaborateur;
  }

  set collaborateur(value: Collaborateur){
    this.collaborateurService.collaborateur = value;
  }

  public signIn(){
    this.collaborateurService.signin().subscribe(
        data => {
          console.log(data);
          if (data) {
            this.collaborateur = data;
            this.router.navigateByUrl('collaborateur');
          }else{
            this.messageService.add(
                {
                  severity: 'error',
                  summary: 'login failed',
                  detail: 'login ou mot de passe incorrect',
                  life: 3000
                }
            );
          }
        }
    );
  }

}
