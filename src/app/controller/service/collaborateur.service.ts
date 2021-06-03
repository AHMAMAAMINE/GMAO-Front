import { Collaborateur } from './../model/collaborateur.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CollaborateurService {
  constructor(private http: HttpClient) {}
  private url = environment.baseUrl + '/collaborateur';
  public _collaborateur: Collaborateur;
  public _collaborateurs: Array<Collaborateur>;

  findAll() {
    this.http.get<Array<Collaborateur>>(this.url + '/').subscribe(
      (data) => {
        this._collaborateurs = data;
      },
      (error) => {
        // alert('Error Colaborateur');
      }
    );
  }

  get collaborateur(): Collaborateur {
    if (this._collaborateur == null) {
      this._collaborateur = new Collaborateur();
    }
    return this._collaborateur;
  }

  get collaborateurs(): Array<Collaborateur> {
    if (this._collaborateurs == null) {
      this._collaborateurs = new Array<Collaborateur>();
    }
    return this._collaborateurs;
  }
  set collaborateur(value: Collaborateur) {
    this._collaborateur = value;
  }

  set collaborateurs(value: Array<Collaborateur>) {
    this._collaborateurs = value;
  }

  //   addCollaborateur(collaborateur: Collaborateur) {
  //     this.http.post(this.url + '/', collaborateur).subscribe(
  //       (data) => {
  //         if (data == 1) {

  //         }
  //       },
  //       (error) => {}
  //     );
  //   }
}
