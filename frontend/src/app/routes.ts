import { Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SearchComponent } from './components/search/search.component';
import { NgoProfileComponent } from './components/ngo-profile/ngo-profile.component';
import { VolunteerProfileComponent } from './components/volunteer-profile/volunteer-profile.component';
import { EventComponent } from './components/event/event.component';
import { JobComponent } from './components/job/job.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path:'', component: AppComponent},
    {path:'home', component: LandingPageComponent},
    {path:'search', component: SearchComponent},
    {path:'ong/:id', component: NgoProfileComponent},
    {path:'username', component: VolunteerProfileComponent},
    {path:'event', component: EventComponent},
    {path:'job', component: JobComponent},
];
