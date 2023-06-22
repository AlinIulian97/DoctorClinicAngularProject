import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Doctor } from '../common/doctor';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private doctorUrl = `http://localhost:8081/api/doctors`;

  constructor(private httpClient: HttpClient) { }


  getDoctor(theDoctorId: number): Observable<Doctor> {
    const findDoctorUrl = `${this.doctorUrl}/${theDoctorId}`
    return this.httpClient.get<Doctor>(findDoctorUrl);

  }

  getAllDoctors() : Observable<Doctor[]> {
  return this.httpClient.get<GetResponseDoctors>(this.doctorUrl).pipe(
    map(response => response._embedded.doctor)
  );
  }
}

interface GetResponseDoctors{
  _embedded :{
    doctor:Doctor[];

  };
}