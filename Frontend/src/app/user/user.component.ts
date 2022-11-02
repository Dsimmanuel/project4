import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  register={
    username:"",
    password:""
  }
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }
  Ulogin()
  {
    this.api.ulogin(this.register).subscribe((register) =>{
      if(register.success === true){
        this.router.navigate(['/ul'])
      }else{
        alert(register.success)
      }
      
    })
    
  }
}
