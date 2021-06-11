import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {DemandeConge} from '../model/demande-conge.model';
import {TacheIntervention} from '../model/tache-intervention.model';
import {Equipe} from '../model/equipe.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TacheInterventionService {
  private url = environment.baseUrl + '/conge/';
  private _items: Array<TacheIntervention>;
  private _selected: TacheIntervention;
  private _selectes: Array<TacheIntervention>;
  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;
  constructor(private http: HttpClient) { }
  public save() {
    this.selected = this.selected;
    this.items.push(this._selected);
    console.log(this.items);
    this._selected = null;
    return this.http.post<TacheIntervention>(this.url, this.selected);
  }

  get items(): Array<TacheIntervention> {
    return this._items;
  }

  set items(value: Array<TacheIntervention>) {
    this._items = value;
  }

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
}
