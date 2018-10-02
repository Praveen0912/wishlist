import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) { }

  //rootUrl = 'http://localhost:8080/';
   rootUrl = '';
  
  //login
  login(user){
    return this.http.post(this.rootUrl+'api/customer',user)
    .pipe(map((response: Response) =>  response.json()));
  }
  
  //for router guard 
  isLoggedIn(token): Observable<any> {
    var apiUrl =this.rootUrl+'api/customer'; 
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '+token
    });
    return this.http.get(apiUrl, { headers: headers })
    .pipe(map((response: any) =>  response.json()));
  }

   //change password
   changePassword(token, data): Observable<any>{
    var apiUrl =this.rootUrl+'api/customer/'+data._id;
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '+token
    });
    return this.http.put(apiUrl, data, { headers: headers })
    .pipe(map((response: any) =>  response.json()));
  }
  
  getItems(token): Observable<any>{
    var apiUrl =this.rootUrl+'api/items';
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '+token
    });
    return this.http.get(apiUrl, { headers: headers })
    .pipe(map((response: any) =>  response.json()));
  }

  addToWish(token, item): Observable<any>{
    var apiUrl =this.rootUrl+'api/wishList'; 
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '+token
    });
    return this.http.post(apiUrl, item, { headers: headers })
    .pipe(map((response: any) =>  response.json()));
  }

  getWishListItems(token, id): Observable<any>{
    var apiUrl =this.rootUrl+'api/wishList/'+id;
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '+token
    });
    return this.http.put(apiUrl, {_id:id} ,{ headers: headers })
    .pipe(map((response: any) =>  response.json()));
  }

  removeWishListItem(token, id):Observable<any>{
 
    var apiUrl =this.rootUrl+'api/wishList';
    let options = {
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'bearer '+token
      }),
      body:{_id: id},
    };
    return this.http.delete(apiUrl, options)
    .pipe(map((response: any) =>  response.json()));
  }
}
