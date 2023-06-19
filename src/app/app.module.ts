import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ActiveCarsComponent } from './components/active-cars/active-cars.component';
import { PassedCarsComponent } from './components/passed-cars/passed-cars.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "", component: ActiveCarsComponent},
      {path: "passed", component: PassedCarsComponent}
    ])
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
