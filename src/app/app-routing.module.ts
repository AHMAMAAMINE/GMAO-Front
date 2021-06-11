import { CollaborateurListComponent } from "./view/collaborateur/collaborateur-list/collaborateur-list.component";

import { SignUpComponent } from "./view/admin/connection/sign-up/sign-up.component";
import { SignInComponent } from "./view/admin/connection/sign-in/sign-in.component";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AdminMainComponent } from "./view/admin/admin-main/admin-main.component";
import { DashboardDemoComponent } from "./demo/view/dashboarddemo.component";
import { CommandesComponent } from "./view/admin/commandes/commandes.component";
import { StockComponent } from "./view/admin/stock/stock.component";
import { EquipesComponent } from "./view/admin/equipes/equipes.component";
import { OperationStockComponent } from "./view/admin/operationStock/operationStock.component";
import { AppErrorComponent } from "./pages/app.error.component";
import { AppNotfoundComponent } from "./pages/app.notfound.component";
import { HomePageComponent } from "./view/home/home-page/home-page.component";

import { CollaborateurDemandeCongeComponent } from "./view/collaborateur/collaborateur-demande-conge/collaborateur-demande-conge.component";
import { CollaborateurMainComponent } from "./view/collaborateur/collaborateur-main/collaborateur-main.component";
import { ChefEquipeMainComponent } from "./view/chef-equipe/chef-equipe-main/chef-equipe-main.component";
import { ChefEquipeSignInComponent } from "./view/chef-equipe/chef-equipe-connection/chef-equipe-sign-in/chef-equipe-sign-in.component";
import { ChefEquipeSignUpComponent } from "./view/chef-equipe/chef-equipe-connection/chef-equipe-sign-up/chef-equipe-sign-up.component";
import { HomeComponent } from "./view/home/home.component";
import { SignInCollaborateurComponent } from "./view/collaborateur/connection-collaborateur/sign-in-collaborateur/sign-in-collaborateur.component";
import { SignUpCollaborateurComponent } from "./view/collaborateur/connection-collaborateur/sign-up-collaborateur/sign-up-collaborateur.component";
import {DemandeCongeListComponent} from './view/chef-equipe/chef-equipe-demandeConge/demande-conge-list/demande-conge-list.component';
import {ChefEquipeTacheListComponent} from './view/chef-equipe/chef-tache/chef-equipe-tache-list/chef-equipe-tache-list.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: "", component: HomePageComponent },
        { path: "admin-login", component: SignInComponent },
        { path: "admin-signup", component: SignUpComponent },
        { path: "chef-equipe-login", component: ChefEquipeSignInComponent },
        { path: "chef-equipe-sign-up", component: ChefEquipeSignUpComponent },
        {
          path: "chef-equipe",
          component: ChefEquipeMainComponent,
          children: [
              { path: "", component: DashboardDemoComponent },
              { path: "chef-equipe-conge", component: DemandeCongeListComponent },
              { path: "chef-equipe-tache", component: ChefEquipeTacheListComponent },
          ],
        },
        {
          path: "admin",
          component: AdminMainComponent,
          children: [
            { path: "", component: DashboardDemoComponent },
            { path: "view/commande", component: CommandesComponent },
            { path: "view/stock", component: StockComponent },
            { path: "view/equipes", component: EquipesComponent },
            { path: "view/operation", component: OperationStockComponent },
          ],
        },
        {
          path: "collaborateur-signin",
          component: SignInCollaborateurComponent,
        },
        {
          path: "collaborateur-signup",
          component: SignUpCollaborateurComponent,
        },
        {
          path: "collaborateur",
          component: CollaborateurMainComponent,
          children: [
            { path: "", component: DashboardDemoComponent },
            {
              path: "collaborateur/demande/conge",
              component: CollaborateurDemandeCongeComponent,
            },
            { path: "list", component: CollaborateurListComponent },
          ],
        },
        { path: "error", component: AppErrorComponent },
        { path: "404", component: AppNotfoundComponent },
        { path: "**", redirectTo: "/404" },
      ],
      { scrollPositionRestoration: "enabled" }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
