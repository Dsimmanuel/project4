import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-uapprovedloans',
  templateUrl: './uapprovedloans.component.html',
  styleUrls: ['./uapprovedloans.component.css']
})
export class UapprovedloansComponent implements OnInit {
  log:any=[]
  constructor(private api:ApiService) {
    this.log=this.api.getUser()
    
    if(this.log){
      console.log(this.log)
      this.api.viewapruser(this.log).subscribe(
        (data)=>{
          console.log(data)
          this.data=data
        }
      )
    }
   }

  ngOnInit(): void {
  }
  data:any=[]

}
