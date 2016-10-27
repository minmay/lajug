import {Schedule} from '../api/schedule.model';
import {Meeting} from '../api/meeting.model';


export class ScheduleImpl implements Schedule {
  meetings: Meeting[];

  findNextMeeting(): Meeting {
    return this.meetings.find(function (meeting) {
      return meeting.isNext;
    });
  }

}
