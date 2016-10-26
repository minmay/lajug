import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DirectionsComponent } from './directions/directions.component';
import { MailingListComponent } from './mailing-list/mailing-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    DirectionsComponent,
    MailingListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: ScheduleComponent },
      { path: 'directions', component: DirectionsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
