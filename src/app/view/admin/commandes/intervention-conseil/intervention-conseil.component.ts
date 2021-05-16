import { Component, OnInit } from '@angular/core';
import {InterventionService} from '../../../../controller/service/intervention.service';
import {Conseils} from '../../../../controller/model/conseils.model';

@Component({
  selector: 'app-intervention-conseil',
  templateUrl: './intervention-conseil.component.html',
  styleUrls: ['./intervention-conseil.component.scss']
})
export class InterventionConseilComponent implements OnInit {

  constructor(private service: InterventionService) { }

  ngOnInit(): void {
  }

  get conseilIntervention(): Conseils {
    return this.service.conseilIntervention;
  }

  ajouter() {
    this.service.saveConseil();
  }
  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }
}
