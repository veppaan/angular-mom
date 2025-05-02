import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculateComponent } from './calculate/calculate.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'calculate', component: CalculateComponent },
    { path: 'about', component: AboutComponent }
];
