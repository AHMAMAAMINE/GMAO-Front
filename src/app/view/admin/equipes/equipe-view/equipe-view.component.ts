import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Equipe } from 'src/app/controller/model/equipe.model';
import { EquipesService } from 'src/app/controller/service/equipes.service';

@Component({
  selector: 'app-equipe-view',
  templateUrl: './equipe-view.component.html',
  styleUrls: ['./equipe-view.component.scss']
})
export class EquipeViewComponent implements OnInit {

  constructor(private messageService: MessageService, private service: EquipesService) { }

  ngOnInit(): void {
  }
  public hideViewDialog() {
    this.viewDialog = false;
  }

  get selectedEquipe(): Equipe {
    return this.service.selectedEquipe;
  }

  set selectedEquipe(value: Equipe) {
    this.service.selectedEquipe = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }


}
