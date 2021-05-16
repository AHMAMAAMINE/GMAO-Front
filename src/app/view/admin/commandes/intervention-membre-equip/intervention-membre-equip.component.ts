import { Component, OnInit } from '@angular/core';
import {CollaborateurService} from "../../../../controller/service/collaborateur.service";
import {InterventionService} from "../../../../controller/service/intervention.service";
import {InterventionMembreEquipe} from "../../../../controller/model/intervention-membre-equipe.model";
import {Collaborateur} from "../../../../controller/model/collaborateur.model";

@Component({
  selector: 'app-intervention-membre-equip',
  templateUrl: './intervention-membre-equip.component.html',
  styleUrls: ['./intervention-membre-equip.component.scss']
})
export class InterventionMembreEquipComponent implements OnInit {

  constructor(private service:CollaborateurService,private serviceinterv:InterventionService) { }


  get collaborateur(): InterventionMembreEquipe {
    return this.serviceinterv.collaborateur;
  }
  get collaborateurs(): Array<Collaborateur> {
    return this.service.collaborateurs;
  }
  selected: string = '';


  ngOnInit(): void {
    this.service.findAll();

  }

  saveCollaboraateur() {
    this.serviceinterv.saveCollaboraateur();
  }


  isSelected($event: any) {
    this.collaborateur.membreEquipe.collaborateur.codeCollaborateur=$event.target.value;
  }
}
