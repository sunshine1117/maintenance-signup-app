import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ActiveCarsComponent } from './components/active-cars/active-cars.component';
import { PassedCarsComponent } from './components/passed-cars/passed-cars.component';
import { AppRoutingModule } from './app-routing.module';
import { AddCarModalComponent } from './components/add-car-modal/add-car-modal.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    ActiveCarsComponent,
    PassedCarsComponent,
    AddCarModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
