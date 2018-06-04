import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { AuthenticationService } from './_services/authentication.service';
import { HomepageComponent } from './homepage/homepage.component';
import { RedirectComponent } from './redirect/redirect.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './_interceptors/auth.service';
import { TokenService } from './_services/token.service';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RedirectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule

  ],
  providers: [
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
        useClass: AuthService,
        multi: true
    },
    TokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
