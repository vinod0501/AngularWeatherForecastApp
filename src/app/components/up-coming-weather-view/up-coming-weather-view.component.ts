import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { WeatherForecastService } from 'src/app/services/weather-forecast.service';

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Clouds {
  all: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Sys {
  pod: string;
}



export interface List {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: string;

}

export interface Coord {
  lat: number;
  lon: number;
}

export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface UpcomingWeather {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
}

@Component({
  selector: 'app-up-coming-weather-view',
  templateUrl: './up-coming-weather-view.component.html',
  styleUrls: ['./up-coming-weather-view.component.scss']
})
export class UpComingWeatherViewComponent implements OnInit {
  city!: string | null;
  subscription = new Subscription();
  upcomingWeather!: UpcomingWeather;

  constructor( private route: ActivatedRoute,private weatherForecastService:WeatherForecastService) { }

  ngOnInit(): void {
    this.city = this.route.snapshot.paramMap.get('city');
    this.getUpcomingWeatherForecastByCity();
  }

  getUpcomingWeatherForecastByCity(){
this.subscription.add(this.weatherForecastService.getUpcomingWeatherForecastByCity(this.city).subscribe((res:any)=>{
 this.upcomingWeather=res;
}))
  }
}
