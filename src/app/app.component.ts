import { Component, OnDestroy } from '@angular/core';
import { LoaderService } from './shared/http-interceptors/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularWeatherForecast';
  loading: any;

  constructor(  private loaderService: LoaderService,) {
    this.loading = this.loaderService.getIsLoading();
  }

}
