import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeasonsComponent } from './seasons/seasons.component';
import { ToursComponent } from './tours/tours.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/seasons',
    pathMatch: 'full'
  },
  {
    path: 'seasons',
    canActivate: [AuthGuard],
    component: SeasonsComponent
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
