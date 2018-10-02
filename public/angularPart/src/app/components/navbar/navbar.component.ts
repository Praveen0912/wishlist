import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  exp_customer:boolean = false;
  customer_id:any;
  constructor(private dataService:DataService, private router:Router, private route :ActivatedRoute) {
    const customerLink = JSON.parse(localStorage.getItem('isCustomerLink'));
    const customerToken = JSON.parse(localStorage.getItem('isCustomer'));
    if(customerLink != null){
      if(customerLink.visibility == "hidden"){
       this.exp_customer = true;
      }
    }
    if(customerToken!=null){
      this.customer_id = customerToken._id;
    }
    
   }
  
  ngOnInit() {
  }

  logout(){
    localStorage.clear();  
    this.router.navigateByUrl('/login');
  }

}
