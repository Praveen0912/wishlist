import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  items:any=[];
  constructor(private dataService:DataService, private router:Router, private route :ActivatedRoute) { 
    const token = JSON.parse(localStorage.getItem('isCustomer'));
    this.dataService.getWishListItems(token.data,token._id).subscribe(items=>{
      this.items = items;
    });
  }

  ngOnInit() {
  }

  onClickBuy(){
    alert("Functionality is on hold");
  }

  onRemoveFromList(id){
    var result = confirm("Are you sure to remove this item");
    if(result){
    const token = JSON.parse(localStorage.getItem('isCustomer'));
     this.dataService.removeWishListItem(token.data,id).subscribe(signal=>{
     if(signal.message == true){ 
        for(let i = 0;i < this.items.length;i++){
          if(this.items[i]._id == id){
              this.items.splice(i,1);
            }
        }
        alert("Item is successfully removed from wish list") 
      }
      if(signal.message != true){
        alert(signal.message)
      }
     });
    }
  }
}
