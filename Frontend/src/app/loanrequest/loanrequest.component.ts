import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-loanrequest',
  templateUrl: './loanrequest.component.html',
  styleUrls: ['./loanrequest.component.css']
})
export class LoanrequestComponent implements OnInit {
  apply={
    name:"",
    income:"",
    aadhar:"",
    pan:"",
    account:"",
    ifsc:""

  }

  constructor(
     private api:ApiService
    ) { }

  ngOnInit(): void {

  }
Applyloan(){
  console.log(this.apply)
  this.api.applyloan(this.apply).subscribe (
    (data:any)=>{
      alert("successfully applied");
      console.log(data)
    }
  )
}
  }


