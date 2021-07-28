import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  constructor(private httpClient:HttpClient) { }

  getWeatherForecastByCity(cityName:string){
    return this.httpClient.get(`${environment.baseUrl}weather?q=${cityName}&appid=${environment.openWeatherAPIKey}`);
  }
  getUpcomingWeatherForecastByCity(cityName:string | null){
    return this.httpClient.get(`${environment.baseUrl}forecast?q=${cityName}&cnt=5appid=${environment.openWeatherAPIKey}`);
  }
}
