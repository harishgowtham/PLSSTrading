import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginApiServiceService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:8080/',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };
  
  login(loginReq: any) {
    console.log("userId",loginReq.userName);
    console.log("password",loginReq.password);
    let url = "http://localhost:8080/api/user/login";
    return this.http.post(url, loginReq, this.httpOptions);
  }
}
