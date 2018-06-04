import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RedirectComponent } from './redirect/redirect.component';


const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'redirect', component: RedirectComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}