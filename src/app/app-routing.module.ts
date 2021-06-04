
import {SignUpComponent} from './view/admin/connection/sign-up/sign-up.component';
import {SignInComponent} from './view/admin/connection/sign-in/sign-in.component';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AdminMainComponent} from './view/admin/admin-main/admin-main.component';
import {DashboardDemoComponent} from './demo/view/dashboarddemo.component';
import {CommandesComponent} from './view/admin/commandes/commandes.component';
import {StockComponent} from './view/admin/stock/stock.component';
import {EquipesComponent} from './view/admin/equipes/equipes.component';
import {OperationStockComponent} from './view/admin/operationStock/operationStock.component';
import {AppErrorComponent} from './pages/app.error.component';
import {AppNotfoundComponent} from './pages/app.notfound.component';
import {HomePageComponent} from './view/home/home-page/home-page.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
        [
          {path: '', component: HomePageComponent},
          {path: 'admin-login', component: SignInComponent},
          {path: 'admin-signup', component: SignUpComponent},
          {
            path: 'admin', component: AdminMainComponent,
            children: [
              { path: "", component: DashboardDemoComponent },
              { path: "view/commande", component: CommandesComponent },
              { path: "view/stock", component: StockComponent },
              { path: "view/equipes", component: EquipesComponent },
              { path: "view/operation", component: OperationStockComponent },
            ]
          },
          {path: 'error', component: AppErrorComponent},
          {path: '404', component: AppNotfoundComponent},
          {path: '**', redirectTo: '/404'},
        ], {scrollPositionRestoration: 'enabled'})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
