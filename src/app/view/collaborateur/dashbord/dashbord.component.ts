import { Component, OnInit } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import {TacheInterventionService} from '../../../controller/service/tache-intervention.service';
import {CollaborateurService} from '../../../controller/service/collaborateur.service';
import {TacheIntervention} from '../../../controller/model/tache-intervention.model';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {

  constructor(private service:TacheInterventionService) { }


  private completed = this.vos.filter((item) => {
    return item.etatTache === true;
  });
  private num1 = this.completed.length;
  private pourcentage = Number().toFixed(this.num1 / this.vos.length);
  private etat: boolean;



  ngOnInit(): void {
    this.service.findAllInterventions();
    console.log(this.pourcentage);
  }
  get vos(): any[] {
    return this.service.vos;
  }

  get items(): Array<TacheIntervention> {
    return this.service.items;
  }

  completerTache(s: string) {
     this.service.completerTache(s).subscribe((data) => {
       console.log(data);
     });
  }
}
