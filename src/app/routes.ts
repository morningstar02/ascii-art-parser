import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'

export const appRoutes: Routes = [
    {
        path: '', pathMatch: 'full', component: HomeComponent 
    },
]