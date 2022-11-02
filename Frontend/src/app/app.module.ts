import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { AddmemberComponent } from './addmember/addmember.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AccountComponent } from './loanapply/account.component';
import { LoanComponent } from './loan/loan.component';
import { AddloanComponent } from './addloan/addloan.component';
import { ManageloanComponent } from './manageloan/manageloan.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdduserComponent } from './adduser/adduser.component';
import { LoanrequestComponent } from './loanrequest/loanrequest.component';
import { RequestformComponent } from './requestform/requestform.component';
import { UserComponent } from './user/user.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { SavingsComponent } from './savings/savings.component';
import { ViewsavingsComponent } from './viewsavings/viewsavings.component';
import { UpdatesavingsComponent } from './updatesavings/updatesavings.component';
import { ApproveComponent } from './approve/approve.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainhomeComponent,
    LoginadminComponent,
    AddmemberComponent,
    UserloginComponent,
    AccountComponent,
    LoanComponent,
    AddloanComponent,
    ManageloanComponent,
    SidebarComponent,
    AdduserComponent,
    LoanrequestComponent,
    RequestformComponent,
    UserComponent,
    ViewuserComponent,
    SavingsComponent,
    ViewsavingsComponent,
    UpdatesavingsComponent,
    ApproveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
