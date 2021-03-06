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
import { CodeEditorComponent } from './problem-page/code-editor/code-editor.component';
import { QuestionPanelComponent } from './problem-page/question-panel/question-panel.component';
import { ProblemPageComponent } from './problem-page/problem-page.component';
import { AllusersComponent } from './admin/allusers/allusers.component';
import { UserItemComponent } from './admin/allusers/user-item/user-item.component';
import { RegisterComponent } from './register/register.component';
import { ProblemsListComponent } from './problems-list/problems-list.component';
import { ProblemItemComponent } from './problems-list/problem-item/problem-item.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'solve/:title', component: ProblemPageComponent},
  {path: 'admin/allusers', component: AllusersComponent},
  {path: 'problems', component: ProblemsListComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    NavigationComponent,
    CodeEditorComponent,
    QuestionPanelComponent,
    ProblemPageComponent,
    AllusersComponent,
    UserItemComponent,
    RegisterComponent,
    ProblemsListComponent,
    ProblemItemComponent
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
