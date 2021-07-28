import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpComingWeatherViewComponent } from './up-coming-weather-view.component';

describe('UpComingWeatherViewComponent', () => {
  let component: UpComingWeatherViewComponent;
  let fixture: ComponentFixture<UpComingWeatherViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpComingWeatherViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpComingWeatherViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
