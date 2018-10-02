import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items:any=[];
  constructor(private dataService:DataService, private router:Router, private route :ActivatedRoute) { 
    const token = JSON.parse(localStorage.getItem('isCustomer'));
    this.dataService.getItems(token.data).subscribe(items=>{
      this.items = items;
    });
  }

  ngOnInit() {
  }
  
  onClickBuy(){
    alert("Functionality is on hold");
  }
  onAddWishList(item){
    const token = JSON.parse(localStorage.getItem('isCustomer'));
    var item1 = {_id:"", name:"", price:"", customerId:""};
    item1 = item;
    item1.customerId = token._id;
    this.dataService.addToWish(token.data,item).subscribe(signal=>{
      if(signal.message == true){
        alert("Item is successfully added to wish List");
      }
      if(signal.message != true){
        alert(signal.message);
      }
      
    });
  }
}
