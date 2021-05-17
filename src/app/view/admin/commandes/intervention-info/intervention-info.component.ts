import { Component, OnInit } from '@angular/core';
import {Intervention} from '../../../../controller/model/intervention.model';
import {InterventionService} from '../../../../controller/service/intervention.service';

@Component({
  selector: 'app-intervention-info',
  templateUrl: './intervention-info.component.html',
  styleUrls: ['./intervention-info.component.scss']
})
export class InterventionInfoComponent implements OnInit {

  constructor(private service: InterventionService) { }

  get intervention(): Intervention {
    return this.service.selected;
  }
  get interventions(): Array<Intervention> {
    return this.service.items;
  }

  ngOnInit(): void {
  }
  get selected(): Intervention {
    return this.service.selected;
  }
  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }


}
