import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token:any;
  user = {
    email:'',
    password:''
  }

  constructor(private dataService:DataService, private router:Router) { 

    const token = JSON.parse(localStorage.getItem('isCustomer'));
    if(token != null){
        this.dataService.isLoggedIn(token.data).subscribe(signal=>{
          if(signal.status != false && signal.message != 'headerUndefined'){
            this.router.navigateByUrl('/home');
          }
        });
    } 
  }

  ngOnInit() {
  }
  
  login(){
    if(this.user.email!='' && this.user.password !=''){
      this.dataService.login(this.user).subscribe(tokenfromapi =>{
        console.log(tokenfromapi);
        this.token = tokenfromapi.data;
        var _id = tokenfromapi._id;
        if(tokenfromapi.message == 'noUser'){
          alert("Customer do not exist");
          
        }
        else if(tokenfromapi.message == 'wrongPassword'){
          alert("Wrong Password");
          
        }
        else if(tokenfromapi.message == 'networkError'){
          alert("There is a problem to fetch data");
          
        }
      
        else if(this.token != undefined){
         localStorage.clear();
         var customerLink = {
          "visibility":"hidden"
         } 
         localStorage.setItem('isCustomer',JSON.stringify(tokenfromapi));
         localStorage.setItem('isCustomerLink',JSON.stringify(customerLink));
         this.router.navigateByUrl('/home');
        }
      });
    }
    else{
      if(this.user.email !=''){
        if(this.user.password ==''){
          alert('Please Enter Password');
        }
      }
      if(this.user.password !=''){
        if(this.user.email ==''){
         alert('Please Enter Email');
        }
      }
      if(this.user.email =='' && this.user.password == ''){
        alert('Please Enter Email & Password');
      }
    }
  }
}
