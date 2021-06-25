import { Component, OnInit } from '@angular/core';
import {DemandeCongeService} from '../../../controller/service/demande-conge.service';
import {TacheInterventionService} from '../../../controller/service/tache-intervention.service';
import {CollaborateurService} from '../../../controller/service/collaborateur.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
      private demandeCongeService:DemandeCongeService,
      private tacheService:TacheInterventionService,
      private collabService:CollaborateurService
  ) { }
  private demandesNum:number;
  private tacheNum:number;
  private collabNum:number;

  ngOnInit(): void {
    this.demandeCongeService.findAll().subscribe((data) => {
      this.demandesNum = data.length;
    });
    this.tacheService.findAll().subscribe(data =>{
      this.tacheNum = data.length;
    });
    this.collabService.findAll().subscribe(data =>{
      this.collabNum = data.length;
    });
  }

}
