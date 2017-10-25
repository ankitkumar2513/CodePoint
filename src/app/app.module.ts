import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpModule} from "@angular/http";
import {CredentialsService} from "./_services/credentials.service";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    NavigationComponent
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
