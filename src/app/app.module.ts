import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import './rxjs-extensions';

import { ScheduleService } from './schedule/schedule.service';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { NextMeetingComponent } from './schedule/next-meeting/next-meeting.component';
import { DirectionsComponent } from './directions/directions.component';
import { MailingListComponent } from './mailing-list/mailing-list.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    NextMeetingComponent,
    DirectionsComponent,
    MailingListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: ScheduleComponent },
      { path: 'directions', component: DirectionsComponent },
      { path: 'mailing-list', component: MailingListComponent },
      { path: 'about', component: AboutComponent }
    ])
  ],
  providers: [ScheduleService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
