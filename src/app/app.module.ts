import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpModule} from "@angular/http";
import {CredentialsService} from "./services/credentials.service";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CredentialsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
