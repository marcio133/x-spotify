import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { AuthenticationService } from './_services/authentication.service';
import { LoginComponent } from './login/login.component';
import { RedirectComponent } from './redirect/redirect.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './_interceptors/auth.service';
import { TokenService } from './_services/token.service';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchService } from './_services/search.service';
import { UserService } from './_services/user.service';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { TracksComponent } from './tracks/tracks.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RedirectComponent,
    HomeComponent,
    SearchComponent,
    NavBarComponent,
    AlbumComponent,
    ArtistComponent,
    TracksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
        useClass: AuthService,
        multi: true
    },
    TokenService,
    SearchService,
    UserService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
