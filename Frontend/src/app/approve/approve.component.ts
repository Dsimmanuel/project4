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
    api.viewrequest().subscribe(
      (response)=>{
        this.data=response
      }
    )
   }

  ngOnInit(): void {
  }
  
data:any=[]
}
