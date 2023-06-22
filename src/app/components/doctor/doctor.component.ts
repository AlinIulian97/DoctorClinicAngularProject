import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/common/doctor';
import { DoctorService } from 'src/app/service/doctor-service.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctors: Doctor[] = [];

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
      this.showAllDoctors();
  }

  showAllDoctors() {
    this.doctorService.getAllDoctors().subscribe(
      data => this.doctors = data
    );

  }


}
