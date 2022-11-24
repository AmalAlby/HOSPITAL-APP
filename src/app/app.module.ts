import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatiententryComponent } from './patiententry/patiententry.component';
import { PatientsearchComponent } from './patientsearch/patientsearch.component';
import { PatientdeleteComponent } from './patientdelete/patientdelete.component';
import { RouterModule, Routes } from '@angular/router';
import { PatientviewComponent } from './patientview/patientview.component';

const myRoute:Routes=[
{
  path:"",
  component:PatiententryComponent
},
{
  path:"search",
  component:PatientsearchComponent
},
{
  path:"delete",
  component:PatientdeleteComponent
},
{
  path:"view",
  component:PatientviewComponent
}

]

@NgModule({
  declarations: [
    AppComponent,
    PatiententryComponent,
    PatientsearchComponent,
    PatientdeleteComponent,
    PatientviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
