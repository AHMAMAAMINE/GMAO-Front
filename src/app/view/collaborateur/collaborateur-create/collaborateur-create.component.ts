import { CollaborateurService } from "./../../../controller/service/collaborateur.service";
import { MessageService } from "primeng/api";
import { Collaborateur } from "./../../../controller/model/collaborateur.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-collaborateur-create",
  templateUrl: "./collaborateur-create.component.html",
  styleUrls: ["./collaborateur-create.component.scss"],
})
export class CollaborateurCreateComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private collaborateurService: CollaborateurService
  ) {}

  ngOnInit(): void {
    this.collaborateurService.findAll();
  }

  // public hideCreateDialog() {
  //   this.createDialog = false;
  //   this.submitted = false;
  // }

  public save() {
    // this.submitted = true;
    // if (this.selected.code.trim()) {
    //   this.collaborateurService.save().subscribe((data) => {
    //     // this.collaborateurs.push({ ...data });
    //     this.messageService.add({
    //       severity: "success",
    //       summary: "Successful",
    //       detail: "Commande Created",
    //       life: 3000,
    //     });
    //   });
    //   // this.createDialog = false;
    //   // this.collaborateur = new Collaborateur();
    // }
  }

  get selectes(): Array<Collaborateur> {
    return this.collaborateurService.selectes;
  }

  set selectes(value: Array<Collaborateur>) {
    this.collaborateurService.selectes = value;
  }

  get collaborateurs(): Array<Collaborateur> {
    return this.collaborateurService.collaborateurs;
  }

  get collaborateur(): Collaborateur {
    return this.collaborateurService.collaborateur;
  }
}
