import { Injectable } from '@angular/core';
import { User } from '../common/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  private baseUrl = `http://localhost:8081/api/users`;
  
  constructor(private httpClient: HttpClient ) { }
  

  getUser(userId:number): Observable<User> {
     const urlUser =(`${this.baseUrl}/${userId}`)
     return this.httpClient.get<User>(urlUser);
  };
}







interface GetResponseDoctors{
  _embedded :{
    user:User[];
   
  };
}
