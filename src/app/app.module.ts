
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { SearchcountryComponent } from './routes/searchcountry/searchcountry.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SigninComponent } from './routes/signin/signin.component';
import { SignupComponent } from './routes/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import {AngularFireAuthModule} from "@angular/fire/auth";
import { AngularFireModule } from '@angular/fire';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './routes/search/search.component';
import { PagenotfoundComponent } from './routes/pagenotfound/pagenotfound.component';
import { WorldreportComponent } from './routes/worldreport/worldreport.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    SearchcountryComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    PagenotfoundComponent,
    WorldreportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
