import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-loanrequest',
  templateUrl: './loanrequest.component.html',
  styleUrls: ['./loanrequest.component.css']
})
export class LoanrequestComponent implements OnInit {
  apply={
    loanid:"",
    loanName:"",
    name:"",
    income:"",
    aadhar:"",
    pan:"",
    account:"",
    ifsc:""

  }
  loan:any=[]
  constructor(
     private api:ApiService
    ) { 
      this.loan=this.api.getLoan()
      if(this.loan){
        this.apply.loanid=this.loan.loanid
        this.apply.loanName=this.loan.loanName
      }
    }

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


