import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoanComponent } from './loan/loan.component';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  Loan:any=[]
  USER_KEY:any=[]
  constructor(private http:HttpClient) { }


  public saveLoan(loan: any): void {
    window.sessionStorage.removeItem(this.Loan);
    window.sessionStorage.setItem(this.Loan, JSON.stringify(loan));

  }

  public getLoan(): any {
    const loan = window.sessionStorage.getItem(this.Loan);
    if (loan) {
      return JSON.parse(loan);
    }
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(this.USER_KEY);
    window.sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));

  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(this.USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
  }



  viewuser=()=>{
    return this.http.get<any>("http://localhost:3000/home")
  } 
  deleteuser=(id:any)=>{
    return this.http.delete<any>("http://localhost:3000/delete/"+id._id)
  }
  updateuser=(user:any)=>{
    return this.http.put<any>("http://localhost:3000/update/"+user._id,user)
  }
  adduser=(user:any)=>{
    return this.http.post<any>("http://localhost:3000/register",user)
  } 


  //admin

  addadmin=(admin:any)=>{
    return this.http.post<any>("http://localhost:3000/loginadmin",admin)


  }

  //loan

  viewloan=()=>{
    return this.http.get<any>("http://localhost:3000/manage")
  }
addloan=(loan:any)=>{
  return this.http.post<any>("http://localhost:3000/addloan",loan)
}
deleteloan=(id:any)=>{
  return this.http.delete<any>("http://localhost:3000/deleteloan/"+id)
}  

updateloan=(loan:any)=>{
  return this.http.put<any>("http://localhost:3000/updateloan/"+loan._id,loan)
}

//apply loan
viewrequest=()=>{
  return this.http.get<any>("http://localhost:3000/foradmin")
}
applyloan=(apply:any)=>{
  return this.http.post<any>("http://localhost:3000/forloan",apply)
}
//savings

addsavings=(save:any)=>{
  return this.http.post<any>("http://localhost:3000/saving",save)
}
viewsavings=(cash:any)=>{
  
  return this.http.post<any>("http://localhost:3000/money",cash)

}
savehere=()=>{
  return this.http.get<any>("http://localhost:3000/seen")
}
ulogin(data3:any){
  return this.http.post<any>("http://localhost:3000/ulogin",data3)
}
//need to approve

addrequest=(loan:any)=>{
  return this.http.post<any>("http://localhost:3000/approveloan",loan)
}
rejectrequest=(id:any)=>{
return this.http.delete<any>("http://localhost:3000/rejectloan/"+id)
}

Viewrequest=()=>{
  return this.http.get<any>("http://localhost:3000/Viewrqt")
}

//approved


addreq=(loan:any)=>{
  return this.http.post<any>("http://localhost:3000/register",loan)
}



vrequest=(loan:any)=>{
  return this.http.get<any>("http://localhost:3000/home")
}

//view savings delete
deletesavings=(id:any)=>{
  return this.http.delete<any>("http://localhost:3000/deletesavings/"+id._id)
}
Deleteapproved=(id:any)=>{
  return this.http.delete<any>("http://localhost:3000/deleteapproved/"+id)
}

viewapruser=(loan:any)=>{
  
  return this.http.post<any>("http://localhost:3000/aprloan",loan)

}

}

