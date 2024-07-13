import { NgFor } from '@angular/common';
import { SharedService } from '../../shared.service';
import { Component, OnInit } from '@angular/core';
import { AddEditEmpComponent } from '../add-edit-emp/add-edit-emp.component';
@Component({
    selector: 'app-show-emp',
    standalone: true,
    templateUrl: './show-emp.component.html',
    styleUrl: './show-emp.component.css',
    imports: [NgFor, AddEditEmpComponent]
})
export class ShowEmpComponent implements OnInit  {
EmployeeId: any;

constructor(private sharedService: SharedService) {}
EmployeeList : any =[];

ModelTitle!: string;
ActivateAddEditEmpComp : boolean =false;
Emp:any;
mode :string='add';

ngOnInit(): void {
  this.refreshEmpList();
  this.addClick();
}

 refreshEmpList()
 {
  this.sharedService.getEmppList().subscribe(data => 
    {
      this.EmployeeList=data;
    });
 }
 addClick()
 {
  this.mode="add"
  this.Emp={
    EmployeeId :0,
    EmployeeName:"",
    Department :"",
    DateOfJoining :"",
    PhotoFileName : ""

  }
  this.ModelTitle="Add Employee";
  this.ActivateAddEditEmpComp = true;
 }

 closeClick()
 {
  this.ActivateAddEditEmpComp = false;
  this.refreshEmpList();
 }

 editClick(id:number,name:string,department:string,dateofjoining:string,photo:string)
 { 
  this.mode="edit"
  this.Emp ={id,name,department,dateofjoining,photo}
  this.ModelTitle = "Edit Employee";
  this.ActivateAddEditEmpComp=true;
  
   
 }
 deleteEmployee(item = this.Emp) 
 {
  if(confirm('Are you Sure'))
  {
    this.sharedService.deleteEmployee(item).subscribe(data =>
      {
        alert(data.toString());
        this.refreshEmpList();
      });
  }

}
}

