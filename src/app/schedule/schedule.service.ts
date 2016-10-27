import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';

import { Http } from '@angular/http';
import { Schedule } from './../domain/api/schedule.model';

@Injectable()
export class ScheduleService {

  private scheduleUrl = 'assets/schedule/schedule.json';

  constructor(private http: Http) {
  }

  findSchedule(): Promise<Schedule> {
    return this.http.get(this.scheduleUrl)
      .toPromise()
      .then(response => response.json() as Schedule)
      .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
