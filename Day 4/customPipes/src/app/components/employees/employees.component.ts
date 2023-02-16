import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {


  empList = [
    {empNo:101, empName:'Nikhil',empDesignation:'Trainer',empGender:'Male',empSalary:5000, empIsPermenant:true},
    {empNo:102, empName:'Anjali',empDesignation:'Trainer',empGender:'Female',empSalary:3000, empIsPermenant:true},
    {empNo:103, empName:'Priya',empDesignation:'HR',empGender:'Female',empSalary:15000, empIsPermenant:false},
    {empNo:104, empName:'Monica',empDesignation:'Sales',empGender:'Female',empSalary:18000, empIsPermenant:true},
    {empNo:105, empName:'Arnab',empDesignation:'Accounts',empGender:'Male',empSalary:12000, empIsPermenant:true},
    {empNo:106, empName:'Sumit',empDesignation:'Accounts',empGender:'Male',empSalary:4000, empIsPermenant:false},
    {empNo:107, empName:'Nelson',empDesignation:'Sales',empGender:'Male',empSalary:9000, empIsPermenant:true},
    {empNo:108, empName:'Kimlin',empDesignation:'HR',empGender:'Female',empSalary:18000, empIsPermenant:true}
  ]

}
