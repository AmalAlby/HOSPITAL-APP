import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatiententryComponent } from './patiententry/patiententry.component';
import { PatientsearchComponent } from './patientsearch/patientsearch.component';
import { PatientdeleteComponent } from './patientdelete/patientdelete.component';

@NgModule({
  declarations: [
    AppComponent,
    PatiententryComponent,
    PatientsearchComponent,
    PatientdeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
