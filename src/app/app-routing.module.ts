import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ForecastComponent } from './forecast/forecast.component';
import { AreaEditComponent } from './area-edit/area-edit.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'area/edit',
    component: AreaEditComponent,
  },
  {
    path: 'forecast/:city',
    component: ForecastComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
