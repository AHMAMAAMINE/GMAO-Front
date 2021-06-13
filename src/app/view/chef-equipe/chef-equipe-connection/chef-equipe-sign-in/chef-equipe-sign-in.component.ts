import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {ChefEquipeService} from '../../../../controller/service/chef-equipe.service';
import {Router} from '@angular/router';
import {ChefEquipe} from '../../../../controller/model/chef-equipe.model';
import {User} from '../../../../controller/model/user.model';
import {UserService} from '../../../../controller/service/user.service';

@Component({
  selector: 'app-chef-equipe-sign-in',
  templateUrl: './chef-equipe-sign-in.component.html',
  providers: [MessageService],
})
export class ChefEquipeSignInComponent implements OnInit {


  constructor(private chefEquipeService: ChefEquipeService,
              private router: Router,
              private messageService: MessageService,
              private userService: UserService) {
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

}
