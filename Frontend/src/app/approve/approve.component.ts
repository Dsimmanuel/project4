import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {
  approved={
    name:"",
    annual:"",
    aadhar:"",
    pan:"",
    account:"",
    ifsc:""
  }

  constructor(private api:ApiService) {
    api.Viewrequest().subscribe(
      (response)=>{
        this.data=response
      }
    )
   }

  ngOnInit(): void {
  }
  deleteapproved(i:any){
    this.api.Deleteapproved(i._id).subscribe(
      (data)=>{
        console.log(data)
        this.data=this.data.filter((u:any)=>u!==i)

        
      }
    )
  }
  
data:any=[]
}
