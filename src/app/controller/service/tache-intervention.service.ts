import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { DemandeConge } from "../model/demande-conge.model";
import { TacheIntervention } from "../model/tache-intervention.model";
import { Equipe } from "../model/equipe.model";
import { HttpClient } from "@angular/common/http";
import { CollaborateurService } from "./collaborateur.service";
import { Collaborateur } from "../model/collaborateur.model";
import { InterventionService } from "./intervention.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TacheInterventionService {
  get vos(): any[] {
    return this._vos;
  }

  set vos(value: any[]) {
    this._vos = value;
  }
  private url = environment.baseUrl + "/tacheIntervention";
  private url2 =
    environment.baseUrl +
    "/Collaborateurintervention-api/Collaborateurintervention/code/";
  private _items: Array<TacheIntervention>;
  private _selected: TacheIntervention;
  private _selectes: Array<TacheIntervention>;
  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;
  private _vos = Array();
  private events = new Array();
  private interventionVo = new Map<string, string>();

  get selected(): TacheIntervention {
    return this._selected;
  }

  set selected(value: TacheIntervention) {
    this._selected = value;
  }

  get selectes(): Array<TacheIntervention> {
    return this._selectes;
  }

  set selectes(value: Array<TacheIntervention>) {
    this._selectes = value;
  }

  get createDialog(): boolean {
    return this._createDialog;
  }

  set createDialog(value: boolean) {
    this._createDialog = value;
  }

  get editDialog(): boolean {
    return this._editDialog;
  }

  set editDialog(value: boolean) {
    this._editDialog = value;
  }

  get viewDialog(): boolean {
    return this._viewDialog;
  }

  set viewDialog(value: boolean) {
    this._viewDialog = value;
  }

  get submitted(): boolean {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }

  constructor(
    private http: HttpClient,
    private collaborateurService: CollaborateurService,
    private interventionService: InterventionService
  ) {}
  public save() {
    this.selected = this.selected;
    this.items.push(this._selected);
    console.log(this.items);
    this._selected = null;
    return this.http.post<TacheIntervention>(this.url, this.selected);
  }

  public getEventsVo(data: Array<TacheIntervention>) {
    let vos = new Array();
    let i = 0;
    data.forEach((tache) => {
      i++;
      const vo = {
        id: i,
        title: tache.description,
        start: tache.intervention.dateDebut,
        end: tache.intervention.dateFin,
      };
      vos.push(vo);
    });
    return vos;
  }

  public getTacheVo(
    data: Array<TacheIntervention>,
    codeInterventions: Map<string, string>
  ) {
    const vos = new Array();

    for (let s of codeInterventions.keys()) {
      const taches = data.filter((item) => {
        return item.intervention.code === s;
      });
      const vo = {
        libelle: codeInterventions.get(s),
        taches,
      };
      vos.push(vo);
    }
    return vos;
  }

  public findAllInterventions() {
    this.http
      .get<Array<TacheIntervention>>(
        this.url + "/collaborateur/code/" + this.collaborateur.codeCollaborateur
      )
      .subscribe(
        (data) => {
          data.forEach((item) => {
            this.interventionVo.set(
              item.intervention.code,
              item.intervention.libelle
            );
          });
          console.log(this.interventionVo);
          this._vos = this.getTacheVo(data, this.interventionVo);
          console.log(this._vos);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  get collaborateur(): Collaborateur {
    return this.collaborateurService.collaborateur;
  }
  get items(): Array<TacheIntervention> {
    return this._items;
  }

  set items(value: Array<TacheIntervention>) {
    this._items = value;
  }

  completerTache(s: string) {
    return this.http.get<number>(this.url + "/completerTache/" + s);
  }
}
