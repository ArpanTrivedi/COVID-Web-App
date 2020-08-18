import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './routes/signup/signup.component';
import { SigninComponent } from './routes/signin/signin.component';
import { HomeComponent } from './routes/home/home.component';
import { SearchcountryComponent } from './routes/searchcountry/searchcountry.component';
import { SearchComponent } from './routes/search/search.component';
import { PagenotfoundComponent } from './routes/pagenotfound/pagenotfound.component';
import { WorldreportComponent } from './routes/worldreport/worldreport.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';



const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['signin']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path:"signup",component:SignupComponent,canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToHome }
  },
  {
    path:"signin",component:SigninComponent,canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToHome }
  },
  {
    path:"home",component:HomeComponent,canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path:"country",component:SearchComponent,canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path:"worldreport",component:WorldreportComponent,canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path:"search",component:SearchcountryComponent,canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path:"",redirectTo:"home",pathMatch:"full"
  },
  {
    path:"**",component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
