import { Component, OnInit } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import {TacheInterventionService} from '../../../controller/service/tache-intervention.service';
import {CollaborateurService} from '../../../controller/service/collaborateur.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {

  constructor(private service:TacheInterventionService) { }

  ngOnInit(): void {
    this.service.findAllInterventions();
  }

}
