
import { User } from "./user.model";
import { Injectable } from "@angular/core";
//import 'rxjs/Rx'
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Subject } from "rxjs";
import { Http, RequestOptions, Response, Headers } from "@angular/http";

@Injectable({ providedIn: "root" })
export class AuthService {

    public DATA_HOST = 'http://localhost:5000/';
    private token: string;
    private isAuthenticated: boolean;
    private userSvcUrl = this.DATA_HOST + 'user/';
    private authStatusListener = new Subject<boolean>();

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

     getAuthStatusListener() {
        return this.authStatusListener.asObservable();
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
         return true;
        //return this.isAuthenticated;
      }
    
}