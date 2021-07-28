import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherForecastService } from 'src/app/services/weather-forecast.service';

interface City {
  value: string;
  viewValue: string;
}


export interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherCastData {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

@Component({
  selector: 'app-city-weather-view',
  templateUrl: './city-weather-view.component.html',
  styleUrls: ['./city-weather-view.component.scss']
})
export class CityWeatherViewComponent implements OnInit , OnDestroy{
  title = 'AngularWeatherForecast';
  selectedValue: string | undefined;
  weatherForecastData!: WeatherCastData;
  subscription = new Subscription();


  cities: City[] = [
    {value: 'London,uk', viewValue: 'London'},
    {value: 'Birmingham,uk', viewValue: 'Birmingham'},
    {value: 'Leeds,uk', viewValue: 'Leeds'},
    {value: 'Glasgow,uk', viewValue: 'Glasgow'},
    {value: 'Sheffield,uk', viewValue: 'Sheffield'},
  ];

  constructor(private weatherForecastService:WeatherForecastService) {

  }
  ngOnInit(): void {
    //
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onCityChange(event: any){
this.subscription.add(
  this.weatherForecastService.getWeatherForecastByCity(event.value).subscribe((res:any)=>{
   this.weatherForecastData=res;
  })
)
  }
}
