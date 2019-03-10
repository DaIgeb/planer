import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ToursComponent } from './tours/tours.component';
import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { httpInterceptorProviders } from './http-interceptors';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent as SeasonListComponent } from './season/list/list.component';
import { DetailComponent as SeasonDetailComponent } from './season/detail/detail.component';
import { AddComponent as SeasonAddComponent } from './season/add/add.component';
import { AddComponent as EventAddComponent } from './event/add/add.component';
import { ListComponent as EventListComponent } from './event/list/list.component';
import { DetailComponent as EventDetailComponent } from './event/detail/detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OverviewComponent } from './event/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    SeasonListComponent,
    NavigationComponent,
    ToursComponent,
    CallbackComponent,
    DashboardComponent,
    SeasonDetailComponent,
    SeasonAddComponent,
    EventListComponent,
    EventDetailComponent,
    EventAddComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    Title,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
