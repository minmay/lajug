import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Schedule } from '../domain/api/schedule.model';

@Injectable()
export class ScheduleService {

  private scheduleUrl = 'assets/schedule/schedule.json';

  constructor(private http: HttpClient) {
  }

  findSchedule(): Observable<Schedule> {
    return this.http.get<Schedule>(this.scheduleUrl);
  }

}
