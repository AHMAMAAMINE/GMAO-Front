import { Component, OnInit } from '@angular/core';
import {Admin} from '../../../../controller/model/admin.model';
import {AdminService} from '../../../../controller/service/admin.service';
import {Router} from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [MessageService]
})
export class SignInComponent implements OnInit {


  constructor(private adminService: AdminService,
              private router: Router,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  get selected(): Admin {
    return this.adminService.selected;
  }

  set selected(value: Admin){
    this.adminService.selected = value;
  }

  // @ts-ignore
  public signIn(){
    this.adminService.seConnecter().subscribe(
        data => {
          console.log(data);
          if (data) {
            this.selected = data;
            this.router.navigateByUrl('admin');
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
