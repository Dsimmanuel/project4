import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  constructor(private api:ApiService) { 
    api.viewuser().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }

  ngOnInit(): void {
  }
  Deleteuser(i:any){
    this.api.deleteuser(i).subscribe(
      (response)=>{
        console.log(response)
        this.data = this.data.filter((u:any)=>u!==i)
      }
    )
  }


  data:any=[]

}
