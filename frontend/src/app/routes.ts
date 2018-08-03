import { Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SearchComponent } from './components/search/search.component';
import { NgoProfileComponent } from './components/ngo-profile/ngo-profile.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path:'', component: AppComponent},
    {path:'home', component: LandingPageComponent},
    {path:'search', component: SearchComponent},
    {path:'ngo-name', component: NgoProfileComponent},
];
