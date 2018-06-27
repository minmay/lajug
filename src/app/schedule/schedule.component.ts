import { Component, OnInit } from '@angular/core';
import { ScheduleService } from './schedule.service';
import { Schedule } from './../domain/api/schedule.model';
import { Meeting } from './../domain/api/meeting.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedule: Schedule;
  nextMeeting: Meeting;

  constructor(private scheduleService: ScheduleService) {
  }

  ngOnInit() {
    this.initialize();
  }

  initialize(): void {
    this.scheduleService.findSchedule().subscribe(schedule => {
      this.schedule = schedule;
      this.nextMeeting = schedule.meetings.find(function (meeting) {
        return meeting.isNext;
      });
    });
  }
}


