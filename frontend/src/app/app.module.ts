import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routes } from './routes';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SearchComponent } from './components/search/search.component';
import { NgoProfileComponent } from './components/ngo-profile/ngo-profile.component';
import { EventComponent } from './components/event/event.component';
import { JobComponent } from './components/job/job.component';
import { VolunteerProfileComponent } from './components/volunteer-profile/volunteer-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SearchComponent,
    NgoProfileComponent,
    EventComponent,
    JobComponent,
    VolunteerProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
