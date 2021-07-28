import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public isLoading = new BehaviorSubject(false);

  constructor() {
    // code here
  }

  getIsLoading() {
    return this.isLoading.asObservable();
  }
}
