import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../../app.component';
import {ChefEquipeMainComponent} from '../chef-equipe-main/chef-equipe-main.component';
import {ChefEquipeService} from '../../../controller/service/chef-equipe.service';
import {ChefEquipe} from '../../../controller/model/chef-equipe.model';

@Component({
  selector: 'app-chef-equipe-top-bar',
  templateUrl: './chef-equipe-top-bar.component.html',
  styleUrls: ['./chef-equipe-top-bar.component.scss']
})
export class ChefEquipeTopBarComponent implements OnInit {


  constructor(public app: AppComponent, public appMain: ChefEquipeMainComponent, private service: ChefEquipeService) {}


  get selected(): ChefEquipe {
    return this.service.selected;
  }

  set selected(value: ChefEquipe) {
    this.service.selected = value;
  }

  ngOnInit(): void {
  }

}
