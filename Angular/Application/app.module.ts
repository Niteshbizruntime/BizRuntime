import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';



const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent},
  { path: 'login', component: LoginComponent},
];


@NgModule({
  declarations: [
    AppComponent,HomeComponent,UserComponent,LoginComponent
  ],
  imports: [
    BrowserModule,HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
