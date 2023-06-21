import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActiveCarsComponent } from './components/active-cars/active-cars.component';
import { PassedCarsComponent } from './components/passed-cars/passed-cars.component';

const routes: Routes = [
  { path: "", redirectTo: '/active', pathMatch: 'full' },
  {path: "active", component: ActiveCarsComponent},
  {path: "passed", component: PassedCarsComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
