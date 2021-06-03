import { Component, OnInit } from '@angular/core';
import {InterventionService} from '../../../../controller/service/intervention.service';
import {Conseils} from '../../../../controller/model/conseils.model';
import {Intervention} from '../../../../controller/model/intervention.model';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-intervention-conseil',
  templateUrl: './intervention-conseil.component.html',
  styleUrls: ['./intervention-conseil.component.scss'],
  providers: [DatePipe]
})
export class InterventionConseilComponent implements OnInit {
  myDate = new Date();
  date: string;
  constructor(private service: InterventionService, private datePipe: DatePipe) {
     this.date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }
  cols: any[];
  ngOnInit(): void {
  }

  get conseilIntervention(): Conseils {
    return this.service.conseilIntervention;
  }
  get conseilInterventions(): Array<Conseils> {
    return this.service.conseilInterventions;
  }
  get selectes(): Array<Intervention> {
    return this.service.selectes;
  }

  set selectes(value: Array<Intervention>) {
    this.service.selectes = value;
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
