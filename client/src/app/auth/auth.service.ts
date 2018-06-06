
import { User } from "./user.model";
import { Injectable } from "@angular/core";
//import 'rxjs/Rx'
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Http, RequestOptions, Response, Headers } from "@angular/http";

@Injectable()
export class AuthService {

    public DATA_HOST = 'http://localhost:5000/';
    private token: string;
    private isAuthenticated: boolean;
    private userSvcUrl = this.DATA_HOST + 'user/';

    constructor(private http: Http){
        
    }
     signup(user: User){
         const body = JSON.stringify(user);
         const headers = new Headers({'Content-Type': 'application/json'});
         let options = new RequestOptions({ headers: headers });
         return this.http.post(this.userSvcUrl, body, options)
         .subscribe(response => { 
             response.json()
         });
     }

    login(user: User){
         const body = JSON.stringify(user);
         const headers = new Headers({'Content-Type': 'application/json'});
         let options = new RequestOptions({ headers: headers });
         return this.http.post(this.userSvcUrl + 'signin', body, options)
                            .subscribe(data => {

                            });
     }

     logout(){
         localStorage.clear();
     }

     isLoggedin(){
         return localStorage.getItem('token') != null;
     }

     getToken(){
        return this.token;
     }

     getIsAuth() {
        return this.isAuthenticated;
      }
    
}