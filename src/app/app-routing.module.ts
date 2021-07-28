import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityWeatherViewComponent } from './components/city-weather-view/city-weather-view.component';
import { UpComingWeatherViewComponent } from './components/up-coming-weather-view/up-coming-weather-view.component';

const routes: Routes = [
  {path:'',  redirectTo:'/city',pathMatch:'full'},
  {path:'city', component:CityWeatherViewComponent},
  {path:'upcoming/:city', component:UpComingWeatherViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
