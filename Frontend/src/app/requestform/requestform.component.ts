import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-requestform',
  templateUrl: './requestform.component.html',
  styleUrls: ['./requestform.component.css']
})
export class RequestformComponent implements OnInit {
  
   
  constructor(private api:ApiService) { 
    api.viewrequest().subscribe(
      (response)=>{
        this.data=response

      }
    )
  }

  ngOnInit(): void {
  }
  Approve(loan:any){
    console.log(loan)
    this.api.addrequest(loan).subscribe(
      (data)=>{
        console.log(data)

      }
    )
    console.log(loan._id)
    this.Reject(loan)
  }


Reject(datas:any){
  console.log("hai")
  this.api.rejectrequest(datas._id).subscribe(
    (data)=>{
      console.log("delete")
      console.log(data);
      this.data=this.data.filter((u:any)=>u!==datas)

        }
  )
}


data:any=[]
}
