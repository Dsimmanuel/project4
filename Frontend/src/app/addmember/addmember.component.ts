import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css']
})
export class AddmemberComponent implements OnInit {
  user={
    userId:"",
    userName:"",
    phoneNo:"",
    email:"",
    dob:"",
    address:"",
    savings:"",
    loanDues:"",
    fine:"",
    bonus:"",

  }

  constructor(private api:ApiService) { 
    api.viewuser().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }

  ngOnInit(): void {
  }
  onEdit(item:any) {
    item.isEdit = true
  }

  Deleteuser(datas:any){
    this.api.deleteuser(datas._id).subscribe(
      (data)=>{
         console.log(data);
         this.data = this.data.filter((u:any)=>u!==datas)
      }
    )

  }
  
  Updateuser(i:any){
    
    console.log()
    this.api.updateuser(i).subscribe(
      (data)=>{
        console.log(data)
        window.location.reload()
      }
      
    )

  }


  data:any=[]
}
