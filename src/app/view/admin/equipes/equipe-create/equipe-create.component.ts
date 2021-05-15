import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Equipe } from 'src/app/controller/model/equipe.model';
import { EquipesService } from 'src/app/controller/service/equipes.service';

@Component({
  selector: 'app-equipe-create',
  templateUrl: './equipe-create.component.html',
  styleUrls: ['./equipe-create.component.scss']
})
export class EquipeCreateComponent implements OnInit {

  constructor(private messageService: MessageService, private service: EquipesService) { }

  ngOnInit(): void {
  }
  public hideCreateDialog() {
    this.createDialog = false;
    this.submitted = false;
}

public save() {
    this.submitted = true;
    if (this.selectedEquipe.ref.trim()) {
        this.service.save().subscribe(data => {
            this.equipes.push({...data});
            this.messageService.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'Equipe Created',
                life: 3000
            });
        });
        this.createDialog = false;
        this.selectedEquipe = new Equipe();
    }
}
get selectedEquipe(): Equipe {
    return this.service.selectedEquipe;
}

set selectedEquipe(value: Equipe) {
    this.service.selectedEquipe = value;
}

get createDialog(): boolean {
    return this.service.createDialog;
}

set createDialog(value: boolean) {
    this.service.createDialog = value;
}

get submitted(): boolean {
    return this.service.submitted;
}

set submitted(value: boolean) {
    this.service.submitted = value;
}

get equipes(): Array<Equipe> {
    return this.service.equipes;
}

set equipes(value: Array<Equipe>) {
    this.service.equipes = value;
}

}
