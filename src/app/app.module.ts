import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ActiveCarsComponent } from './components/active-cars/active-cars.component';
import { PassedCarsComponent } from './components/passed-cars/passed-cars.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    ActiveCarsComponent,
    PassedCarsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
