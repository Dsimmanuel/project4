import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {
username=""
password=""

  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
     // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event:any) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
  }
 /* Addadmin(){
    console.log(this.admin)
    this.api.addadmin(this.admin).subscribe(
      (data:any)=>{
        alert("success");
        console.log(data)
        window.location.reload()
      }
    )}*/
    Logadmin(){
    if(this.username == "Admin" && this.password == "adminadmin"){
     this.router.navigate(['/side'])
    }
    else{
      alert("Invalid Credentials.")
    }
  }

}
