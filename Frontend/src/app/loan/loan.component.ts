import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  loan={
    loanid:"",
    loanName:"",
    loanPlan:"",
    amount:"",
    interest:""

  }

  constructor(
    private api:ApiService
  ) { }


  ngOnInit(): void {
 

}


Addloan(){
  console.log(this.loan)
  this.api.addloan(this.loan).subscribe(
    (data:any)=>{
      alert("success");
      console.log(data)

    }
  )
  
}
}

 