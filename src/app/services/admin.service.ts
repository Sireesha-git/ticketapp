import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  apiUrl = 'http://localhost:8080/admin';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private _http: HttpClient) {}

  loginCheck(loginDetails: any) {
    return this._http.post<boolean>(
      this.apiUrl,
      loginDetails,
      this.httpOptions
    );
  }

  


}
