import { Injectable } from '@angular/core';
import { User } from '../common/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = `http://localhost:8081/api/users`;
  
  constructor(private httpClient: HttpClient ) { }
  
}





interface GetResponseDoctors{
  _embedded :{
    user:User[];

  };
}
