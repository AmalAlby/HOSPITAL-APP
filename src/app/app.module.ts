import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatiententryComponent } from './patiententry/patiententry.component';
import { PatientsearchComponent } from './patientsearch/patientsearch.component';
import { PatientdeleteComponent } from './patientdelete/patientdelete.component';
import { RouterModule, Routes } from '@angular/router';

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
}

]

@NgModule({
  declarations: [
    AppComponent,
    PatiententryComponent,
    PatientsearchComponent,
    PatientdeleteComponent
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
