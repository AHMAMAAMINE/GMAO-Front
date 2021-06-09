import { Component, OnInit } from '@angular/core';
import { InterventionVo } from 'src/app/controller/model/intervention-vo.model';
import { Intervention } from 'src/app/controller/model/intervention.model';
import { InterventionService } from 'src/app/controller/service/intervention.service';

@Component({
  selector: 'app-search-intervention',
  templateUrl: './search-intervention.component.html',
  styleUrls: ['./search-intervention.component.scss']
})
export class SearchInterventionComponent implements OnInit {

  constructor(private service: InterventionService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(data => this.items = data);
  }
  public findByCriteria() {
    this.service.findByCriteria();
    }
  get interventionVo(): InterventionVo {
 
    return this.service.interventionVo;
  }

  get selected(): Intervention {
    return this.service.selected;
}

set selected(value: Intervention) {
    this.service.selected = value;
}

get items(): Array<Intervention> {
    return this.service.items;
}

set items(value: Array<Intervention>) {
    this.service.items = value;
}

}
