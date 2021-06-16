import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {ChefEquipeService} from '../../../../controller/service/chef-equipe.service';
import {Router} from '@angular/router';
import {ChefEquipe} from '../../../../controller/model/chef-equipe.model';
import {User} from '../../../../controller/model/user.model';
import {UserService} from '../../../../controller/service/user.service';
import {CollaborateurService} from '../../../../controller/service/collaborateur.service';
import {Collaborateur} from '../../../../controller/model/collaborateur.model';

@Component({
  selector: 'app-chef-equipe-sign-in',
  templateUrl: './chef-equipe-sign-in.component.html',
  providers: [MessageService],
})
export class ChefEquipeSignInComponent implements OnInit {


  constructor(private chefEquipeService: ChefEquipeService,
              private router: Router,
              private messageService: MessageService,
              private userService: UserService, private collaborateurService: CollaborateurService) {
  }

  ngOnInit(): void {
  }

  get selected(): ChefEquipe {
    return this.chefEquipeService.selected;
  }

  set selected(value: ChefEquipe){
    this.chefEquipeService.selected = value;
  }

    get user(): User{
      return this.userService.User;
    }
    set User(value: User){
      this.userService.User = value;
    }
  get code(): string {
    return this.userService.code;
  }

  set code(value: string) {
    this.userService.code = value;
  }

  public signIn(){
    this.userService.seConnecter(this.user.login, this.user.password);
    // .subscribe(
    //     data => {
    //       if (data) {
    //         this.selected = data;
    //         console.log();
    //         // this.router.navigateByUrl('chef-equipe');
    //       }else{
    //         this.messageService.add(
    //             {
    //               severity: 'error',
    //               summary: 'login failed',
    //               detail: 'login ou mot de passe incorrect',
    //               life: 3000
    //             }
    //         );
    //       }
    //     }
    // );
  }
  get collaborateur(): Collaborateur {
    return this.collaborateurService.collaborateur;
  }

  set collaborateur(value: Collaborateur) {
    this.collaborateurService.collaborateur = value;
  }
    forgotpass() {
        if (this.user.login == null) {
          this.messageService.add({
            severity: 'error',
            summary: 'error',
            detail: 'veuiliezz entre ton login',
            life: 3000,
          });
        }
        else {
          this.collaborateurService.findByLogin(this.user.login).subscribe(data => {
            if (data){
              this.router.navigate(['/forgot']);
              this.collaborateur = data;
              this.userService.envoiDeCode(data.email).subscribe();
            }
          });
        }
    }
}
