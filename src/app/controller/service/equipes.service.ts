// import { EquipeCreateComponent } from './../../equipes/equipe-create/equipe-create.component';
// import { MembreEquipe } from './../model/membre-equipe.model';
// import { Injectable } from '@angular/core';
// import { Equipe } from '../model/equipe.model';
// import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { HttpClient } from '@angular/common/http';
//
//
// @Injectable({
//   providedIn: 'root'
// })
// export class EquipesService {
//   private urlbase = 'http://localhost:8036';
//   private url = 'http://localhost:8036/equipe/';
//   private urlEquipe = 'http://localhost:8036/membreEquipe/';
//   private urlEquipeRef = 'http://localhost:8036/membreEquipe/equipe/ref/'
//   public _equipe: Equipe;
//   public _equipes : Array<Equipe>;
//   public _membre : MembreEquipe;
//   private _index: number;
//   private _equipeSelect : Equipe;
//
//   constructor(private diag : MatDialog,
//     private http: HttpClient
//     ) { }
//     public findAll(){
//       this.http.get<Array<Equipe>>(this.url + '/').subscribe(
//         data => {
//           this.equipes = data ;
//         }, error => {
//           console.log(error); }
//       );
//     }
//     get equipeSelect(): Equipe {
//       if (this._equipeSelect == null){
//         this._equipeSelect = new Equipe();
//       }
//       return this._equipeSelect;
//     }
//
//     set equipeSelect(value: Equipe) {
//       this._equipeSelect = value;
//     }
//
//
//   get equipe(): Equipe {
//     if (this._equipe == null){
//       this._equipe = new Equipe();
//       let membres = new Array<MembreEquipe>();
//       this._equipe.membres = membres;
//       let chef = new MembreEquipe();
//       this._equipe.chefEquipe = chef;
//     }
//     return this._equipe;
//   }
//   set equipe(value: Equipe) {
//     this._equipe = value;
//   }
//
//   get equipes(): Array<Equipe> {
//     if (this._equipes == null){
//       this._equipes = new Array<Equipe>();
//     }
//     return this._equipes;
//   }
//   set equipes(value: Array<Equipe>) {
//     this._equipes = value;
//   }
//
//   get membre(): MembreEquipe {
//     if (this._membre == null){
//       this._membre = new MembreEquipe();
//     }
//     return this._membre;
//   }
//   set membre(value: MembreEquipe) {
//     this._membre = value;
//   }
//
//   public save(){
//     if (this.equipe.id == null){
//       this.http.post( this.url + '/', this.equipe).subscribe(
//         data => {
//           if (data > 0){
//             this.equipes.push(this.mycloneEquipe(this.equipe));
//
//
//           }else {
//             alert('error lors de la création d equipe : ' + data);
//           }
//         }
//       );
//       this.equipe.id = this.equipes.length + 1;
//       this.equipes.push(this.mycloneEquipe(this.equipe));
//       this.equipe = new Equipe();
//
//
//     }else {
//       this.equipes[this._index] = this.mycloneEquipe(this.equipe);
//     }
//   }
//   public addMembres() {
//     this.membre.id = this.equipe.membres.length + 1;
//     this.equipe.membres.push(this.cloneMembre(this.membre));
//     this.membre = new MembreEquipe();
//   }
//   public findByEquipeRef(equipe: Equipe){
//     this.equipeSelect = equipe;
//     if ( this.equipeSelect != null) {
//       this.http.get<Array<MembreEquipe>>(this.urlEquipeRef + equipe.ref).subscribe(
//         data => {
//           this.equipeSelect.membres = data;
//         }, error => {
//           console.log('wow');
//         }
//       );
//     }
//   }
//   public update(index: number, equipe: Equipe) {
//     this.equipe = this.mycloneEquipe(equipe);
//     this._index = index;
//   }
//   private mycloneEquipe(equipe: Equipe) {
//     const myClone = new Equipe();
//     myClone.id = equipe.id;
//     myClone.ref = equipe.ref;
//     myClone.libelle = equipe.libelle;
//     myClone.chefEquipe = equipe.chefEquipe;
//     myClone.membres = new Array<MembreEquipe>();
//     equipe.membres.forEach(element => {
//       myClone.membres.push(element);
//     });
//     return myClone;
//   }
//   private cloneMembre(membre: MembreEquipe) {
//      const myCloneMembre = new MembreEquipe();
//     // myCloneMembre.id = membre.id;
//     // myCloneMembre.fullname = membre.fullname;
//     // myCloneMembre.phone = membre.phone;
//     return myCloneMembre;
//   }
// }
