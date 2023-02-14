import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  trainerName = "Nikhil Shah";
  trainerDesignation = "Sr.Software Trainer - MS";
  trainerTechnologies = ['Angular','.Net','React','Azure','AI','ML','SQL Server','Node','AWS'];
  
  trainerDetails ={
    empNo:101,
    empName : 'Nikhil Shah',
    empCity :'Mumbai',
    empEmail:'nikhil.shah@cognizant.com',
    empIsPermenant:true,
    empContact:40396565,
    empEducation:{
      university:'Pune University',
      degree:'Masters In Computer Applications',
      percentage:89
    },
    empEmergencyContact:{
      contact1:{
          name:'Someone',
          relation:'Friend',
          contactNo:495849
      }
    }
  }

  clientList = [
    {clientId:101, clientName:'CitiBank',clientLocation:'New Jersey',clientContact:3547378,clientRevenue:10},
    {clientId:102, clientName:'Bank of America',clientLocation:'New Jersey',clientContact:3547378,clientRevenue:10},
    {clientId:103, clientName:'Dell',clientLocation:'California',clientContact:3547378,clientRevenue:10},
    {clientId:104, clientName:'Reliance',clientLocation:'India',clientContact:3547378,clientRevenue:10},
    {clientId:105, clientName:'Coke',clientLocation:'New York',clientContact:3547378,clientRevenue:10},
    {clientId:106, clientName:'Apple',clientLocation:'New York',clientContact:3547378,clientRevenue:10},
    {clientId:107, clientName:'Amazon',clientLocation:'San fransisco',clientContact:3547378,clientRevenue:10},
    {clientId:108, clientName:'Persistent',clientLocation:'India',clientContact:3547378,clientRevenue:10},
    {clientId:109, clientName:'RBS',clientLocation:'Scotland',clientContact:3547378,clientRevenue:10},
  ]








}
