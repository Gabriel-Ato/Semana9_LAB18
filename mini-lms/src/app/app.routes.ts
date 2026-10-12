import { Routes } from '@angular/router';
import { Perros } from './perros/perros';

export const routes: Routes = [
    { path: 'perros', component: Perros },
    { path: '', redirectTo: 'perros', pathMatch: 'full' }
];