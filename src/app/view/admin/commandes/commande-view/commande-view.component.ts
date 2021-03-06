import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {Intervention} from '../../../../controller/model/intervention.model';
import {InterventionService} from '../../../../controller/service/intervention.service';


@Component({
  selector: 'app-commande-view',
  templateUrl: './commande-view.component.html',
  styleUrls: ['./commande-view.component.scss']
})
export class CommandeViewComponent implements OnInit {


  constructor(private messageService: MessageService, private service: InterventionService) {
  }

  ngOnInit(): void {
  }

  public hideViewDialog() {
    this.viewDialog = false;
  }

  get selected(): Intervention {
    return this.service.selected;
  }

  set selected(value: Intervention) {
    this.service.selected = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }

}
