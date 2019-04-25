import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { appRoutes } from './routes';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './navigation/header/header.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Segment2numberComponent } from './segment2number/segment2number.component';
import { Number2segmentComponent } from './number2segment/number2segment.component';
import { DigitStore } from './services/digit-store.model';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    Segment2numberComponent,
    Number2segmentComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [DigitStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
