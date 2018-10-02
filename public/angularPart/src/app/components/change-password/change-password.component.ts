import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  user ={
    password:"",
    npassword:""
   };
   temp ={
     ncpassword:""
   };
  constructor(private dataService:DataService, private router:Router, private route :ActivatedRoute) {}

  ngOnInit() {
  }
  
  onPasswordChange(){
    var cpass = this.temp.ncpassword;
    if(this.user.password !='' && this.user.npassword !='' && this.temp.ncpassword != ''){
      if(this.user.npassword == cpass){
        const token = JSON.parse(localStorage.getItem('isCustomer'));
           var data ={
             _id : token._id,
             password:this.user.password,
             npassword:this.user.npassword
           };
          this.dataService.changePassword(token.data, data).subscribe(signal=>{
            if(signal.message == true){
              alert("Your password has been changed");
              this.router.navigateByUrl('/home');
            }
            if(signal.message == "loginError" || signal.message == 'headerUndefined'){
              localStorage.clear();
              alert('Login Timeout');
              this.router.navigateByUrl('/login');
            }
            else if(signal.message == 'fetchingError' || signal.message == 'You entered wrong old password' || signal.message == 'noUser'){
              alert(signal.message);
            }  
          });   
         
      }
      else{
        alert("mismatch confirm password");
      }
    }
    else{
      alert("Please fill all credentials");
    }
  }

}
