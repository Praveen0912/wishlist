import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthGuardGuard } from './auth-guard.guard'

const appRoutes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent, canActivate: [AuthGuardGuard]},
  {path:'wishList',component:WishListComponent, canActivate: [AuthGuardGuard]},
  {path:'changePassword',component:ChangePasswordComponent, canActivate: [AuthGuardGuard]}
 ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    WishListComponent,
    ChangePasswordComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
