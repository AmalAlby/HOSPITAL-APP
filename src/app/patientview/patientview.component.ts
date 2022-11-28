import { Component } from '@angular/core';

@Component({
  selector: 'app-patientview',
  templateUrl: './patientview.component.html',
  styleUrls: ['./patientview.component.css']
})
export class PatientviewComponent {

  name=""
  id=""
  address=""
  numb=""
  dname=""
  doa=""
  image=""

  readvalues=()=>{

    let data:any={
    "name":this.name,
    "id":this.id,
    "address":this.address,
    "numb":this.numb,
    "dname":this.dname,
    "doa":this.doa,
    "image":this.image
    }
    console.log(data)

  }

}
