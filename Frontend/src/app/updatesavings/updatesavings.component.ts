import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-updatesavings',
  templateUrl: './updatesavings.component.html',
  styleUrls: ['./updatesavings.component.css']
})
export class UpdatesavingsComponent implements OnInit {
  save={
    username:"",
    date:"",
    deposite:""
  }

  constructor(private api:ApiService) {
    api.savehere().subscribe(
      (response:any)=>{
        this.data=response
        console.log(this.data)

      }
    )
    }
   

  ngOnInit(): void {
  }
  Deletesavings(i:any){
    this.api.deletesavings(i).subscribe(
    (response)=>{
      console.log(response)
      this.data=this.data.filter((u:any)=>u!==i)
    }
    )
  }

data:any=[]
}
