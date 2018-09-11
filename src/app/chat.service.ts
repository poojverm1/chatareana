import { Injectable } from '@angular/core';
import {Observable} from 'rxjs-compat';
import 'rxjs-compat/add/operator/catch';
import 'rxjs-compat/add/operator/do';
import 'rxjs-compat/add/operator/toPromise';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {HttpResponse,HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = "https://chatapi.edwisor.com";
  constructor(public http: HttpClient) {

    
   }

   public signupFunction(data): Observable<any>{
     const params = new HttpParams()
     .set("firstName", data.firstName)
     .set("lastName", data.lastName)
     .set("mobileNumber", data.mobileNumber)
     .set("email", data.email)
     .set("password", data.password)
     .set("apiKey", data.apiKey);
      
    return this.http.post(`${this.url}/api/v1/users/signup`, params);
  } // end of signupFunction function.
  
}
