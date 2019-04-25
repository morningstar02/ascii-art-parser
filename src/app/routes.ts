import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { Segment2numberComponent } from './segment2number/segment2number.component'

export const appRoutes: Routes = [
    {
        path: '', pathMatch: 'full', component: HomeComponent 
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'segment2number', component: Segment2numberComponent 
    },
    { path: '**', redirectTo: '' }
]