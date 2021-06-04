import { Component, OnInit } from '@angular/core';
import {CollaborateurService} from '../../../../controller/service/collaborateur.service';
import {Collaborateur} from '../../../../controller/model/collaborateur.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  constructor(private collaborateurService: CollaborateurService) { }

  ngOnInit(): void {
  }
  get collaborateur(): Collaborateur{
    return this.collaborateurService.collaborateur;
  }
  save(){
    this.collaborateurService.save().subscribe(
        data => {
          this.collaborateurService.collaborateur = data;
        }
    );
  }


}
