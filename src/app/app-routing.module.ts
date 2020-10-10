import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";

const routes: Routes = [
/*
  {path: '**', redirectTo: '/main', pathMatch: 'full'},
*/
  {path: 'main', component: MainComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
