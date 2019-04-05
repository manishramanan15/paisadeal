import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {Component, Directive, Input, ViewChild, NgZone} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturePlaylistComponent } from './feature-playlist/feature-playlist.component';
import { MainContenComponent } from './main-conten/main-conten.component';
import { LoginComponent } from './login/login.component';
import { AccountService } from './account.service';
import { GoogleauthComponent } from './googleauth/googleauth.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'authcomplete.html', component: GoogleauthComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FeaturePlaylistComponent,
    MainContenComponent,
    LoginComponent,
    GoogleauthComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
