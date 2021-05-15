import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Equipe } from 'src/app/controller/model/equipe.model';
import { EquipesService } from 'src/app/controller/service/equipes.service';

@Component({
  selector: 'app-equipe-edit',
  templateUrl: './equipe-edit.component.html',
  styleUrls: ['./equipe-edit.component.scss']
})
export class EquipeEditComponent implements OnInit {

  constructor(private messageService: MessageService, private service: EquipesService) { }

  ngOnInit(): void {
  }
  public edit() {
    this.submitted = true;
    if (this.selectedEquipe.ref.trim()) {
        if (this.selectedEquipe.id) {
            this.equipes[this.service.findIndexById(this.selectedEquipe.id)] = this.selectedEquipe;
            this.service.edit().subscribe(data => {
                this.selectedEquipe = data;
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Equipe Updated',
                    life: 3000
                });
            });
        }
        this.editDialog = false;
        this.selectedEquipe = new Equipe();
    }
}

public hideEditDialog() {
this.editDialog = false;
}
get selectedEquipe(): Equipe {
    return this.service.selectedEquipe;
}

set selectedEquipe(value: Equipe) {
    this.service.selectedEquipe = value;
}

get editDialog(): boolean {
    return this.service.editDialog;
}

set editDialog(value: boolean) {
    this.service.editDialog = value;
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
