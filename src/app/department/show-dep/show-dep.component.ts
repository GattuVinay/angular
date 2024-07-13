import { NgFor } from '@angular/common';
import { SharedService } from '../../shared.service';
import { Component, OnInit } from '@angular/core';
import { AddEditDepComponent } from "../add-edit-dep/add-edit-dep.component";




@Component({
    selector: 'app-show-dep',
    standalone: true,
    templateUrl: './show-dep.component.html',
    styleUrl: './show-dep.component.css',
    imports: [NgFor, AddEditDepComponent]
})
export class ShowDepComponent implements OnInit {
  DepartmentId: any;

constructor(private sharedService: SharedService) {}
  DepartmentList : any =[];

  ModelTitle!: string;
  ActivateAddEditDepComp : boolean =false;
  dep:any;
  mode :string='add';



ngOnInit(): void {
  this.refreshDepList();
  this.addClick();
  // this.deleteDepartment();
}

 refreshDepList()
 {
  this.sharedService.getDepList().subscribe(data => 
    {
      this.DepartmentList=data;
    });
 }

 addClick()
 {
  this.mode="add"
  this.dep={
    DepartmentId :0,
    DepartmentName:""

  }
  this.ModelTitle="Add Department";
  this.ActivateAddEditDepComp = true;
 }

 closeClick()
 {
  this.ActivateAddEditDepComp = false;
  this.refreshDepList();
 }

  editClick(id:number,name:string)
 { 
  this.mode="edit"
  this.dep ={id,name}
  this.ModelTitle = "Edit Department";
  this.ActivateAddEditDepComp=true;
 

 }
 deleteDepartment(item = this.dep) 
 {
  if(confirm('Are you Sure'))
  {
    this.sharedService.deleteDepartment(item).subscribe(data =>
      {
        // alert(data.toString());
        this.refreshDepList();
      });
  }

}
}
