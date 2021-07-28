import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityWeatherViewComponent } from './city-weather-view.component';

describe('CityWeatherViewComponent', () => {
  let component: CityWeatherViewComponent;
  let fixture: ComponentFixture<CityWeatherViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityWeatherViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
