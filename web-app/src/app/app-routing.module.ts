import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent as SeasonsComponent } from './season/list/list.component';
import { ToursComponent } from './tours/tours.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent as SeasonComponent } from './season/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'seasons',
    canActivate: [AuthGuard],
    component: SeasonsComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: ':id', component: SeasonComponent }
    ]
  },
  {
    path: 'tours',
    canActivate: [AuthGuard],
    component: ToursComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: '**',
    redirectTo: '/seasons'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
