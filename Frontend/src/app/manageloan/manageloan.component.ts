import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-manageloan',
  templateUrl: './manageloan.component.html',
  styleUrls: ['./manageloan.component.css']
})
export class ManageloanComponent implements OnInit {
  loan={
    loanid:"",
    loanName:"",
    loanPlan:"",
    interest:"",
    amount:"",

  }

  constructor(private api:ApiService,
    private router:Router) {
    api.viewloan().subscribe(
    
      (response)=>{
        this.data=response
        console.log(this.data)
      }
      )
   }

  ngOnInit(): void {
  }
  onEdit(item:any){
    item.isEdit=true
  }



Deleteloan(datas:any){
  this.api.deleteloan(datas._id).subscribe(
    (data)=>{
      console.log(data);
      this.data=this.data.filter((u:any)=>u!==datas)
    }
  )
}





Updateloan(i:any){
  console.log()
  this.api.updateloan(i).subscribe(
    (data)=>{
      console.log(data)
      window.location.reload()
    }
  )
}

manageloan(i:any){
  console.log(i)
  this.api.saveLoan(i)
  this.router.navigate(['/request'])
}


data:any=[]
}
