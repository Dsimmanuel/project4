import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewsavings',
  templateUrl: './viewsavings.component.html',
  styleUrls: ['./viewsavings.component.css']
})
export class ViewsavingsComponent implements OnInit {
  cash={
    username:""

  }

  constructor(
private api:ApiService
  ) { }

  ngOnInit(): void {
  }
Viewsavings(){
  console.log(this.cash)
  this.api.viewsavings(this.cash).subscribe(
    (data:any)=>{
      this.data1=data
      alert("success")
      console.log(this.data1)
    }
  )
}

data1:any=[]
}
