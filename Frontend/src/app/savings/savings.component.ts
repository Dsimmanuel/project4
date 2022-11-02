import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {
  save={
    
    username:"",
    date:"",
    deposite:""
  }

  constructor(
    private api:ApiService
  ) { }

  ngOnInit(): void {
   
  }
Addsavings(){
  console.log(this.save)
  this.api.addsavings(this.save).subscribe(
    (data:any)=>{
      alert("success");
      console.log(data)
    }
  )
}
 
}
