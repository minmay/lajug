import { Component, Input } from '@angular/core';
import { Meeting } from '../../domain/api/meeting.model';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-next-meeting',
  templateUrl: './next-meeting.component.html',
  styleUrls: ['./next-meeting.component.css']
})
export class NextMeetingComponent {

  showYouTubeEmbed: boolean;
  meetingYoutubeEmbedUrl: SafeUrl;

  @Input()
  meeting: Meeting;

  constructor (
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
    this.showYouTubeEmbed = this.meeting.youtube != null && this.meeting.youtube.embed != null;
    this.meetingYoutubeEmbedUrl = this.meeting.youtube && this.meeting.youtube.embed ? this.sanitizer.bypassSecurityTrustResourceUrl(this.meeting.youtube.embed) : null;
  }
}
