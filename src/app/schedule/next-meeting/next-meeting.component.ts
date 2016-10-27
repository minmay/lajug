import { Component, Input } from '@angular/core';
import { Meeting } from '../../domain/api/meeting.model';

@Component({
  selector: 'app-next-meeting',
  templateUrl: './next-meeting.component.html',
  styleUrls: ['./next-meeting.component.css']
})
export class NextMeetingComponent {

  @Input()
  meeting: Meeting;
}
