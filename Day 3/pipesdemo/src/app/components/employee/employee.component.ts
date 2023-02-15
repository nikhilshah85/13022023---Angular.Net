import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {


    firstName = "nikhil";
    lastName = "shAh";
    dob = new Date(1940,1,25);
    salary = 2000;
    contact = { email:'nikhil@gmail.com',
                phone:3847387,
                emergency:'Rahul',
                emergencyContact:9090
              };
      masterDegreeScore = 0.89;
    



}
