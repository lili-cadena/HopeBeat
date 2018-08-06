import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routes } from './routes';

//Components
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SearchComponent } from './components/search/search.component';
import { NgoProfileComponent } from './components/ngo-profile/ngo-profile.component';
import { EventComponent } from './components/event/event.component';
import { JobComponent } from './components/job/job.component';
import { VolunteerProfileComponent } from './components/volunteer-profile/volunteer-profile.component';

//Services
import { AuthService } from './services/auth.service';
import { CommentsService} from './services/comments.service';
import { EventsService} from './services/events.service';
import { JobsService } from './services/jobs.service';
import { ExperiencesService } from './services/experiences.service';
import { OngsService } from './services/ongs.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FirebaseService } from './services/firebase.service';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SearchComponent,
    NgoProfileComponent,
    EventComponent,
    JobComponent,
    VolunteerProfileComponent,
    NavBarComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    AuthService,
    CommentsService,
    EventsService,
    JobsService,
    ExperiencesService,
    OngsService,
    FirebaseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
