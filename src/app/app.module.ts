import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from './services/in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ActiveCarsComponent } from './components/active-cars/active-cars.component';
import { PassedCarsComponent } from './components/passed-cars/passed-cars.component';
import { AddCarModalComponent } from './components/add-car-modal/add-car-modal.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
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
