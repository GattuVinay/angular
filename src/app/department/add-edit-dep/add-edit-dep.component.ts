import { Component,Input,OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { SharedService } from '../../shared.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-add-edit-dep',
  standalone: true,
  imports: [FormsModule,CommonModule,NgFor],
  templateUrl: './add-edit-dep.component.html',
  styleUrl: './add-edit-dep.component.css'
})
export class AddEditDepComponent implements OnInit,OnChanges {
  sharedService: any;
  

  constructor(private service : SharedService)
  {

  }
  DepartmentList : any =[];
  @Input() dep : any;
  @Input() mode!:string;
  DepartmentId ! : string ;
  DepartmentName!: string;

   ngOnInit() : void 
   {
    this.DepartmentId = this.dep.id;
    this.DepartmentName = this.dep.name;
   }
   ngOnChanges(): void {
    this.DepartmentId = this.dep.id;
    this.DepartmentName = this.dep.name;
   }
  
   addDepartment()
   {
    try{
    var val = {DepartmentId :this.DepartmentId,
               DepartmentName :this.DepartmentName};
      this.service.addDepartment(val).subscribe(res => {
        alert(res.toString());
          });
      window.location.reload();
  }
  catch(e)
  {
   console.log("Exception",e)
  }
  }  

  updateDepartment()
  {    
   var  val = {DepartmentId: this.dep.id ,
              DepartmentName:  this.DepartmentName};
        this.service.UpdateDepartment(val).subscribe(res => {
           alert(res.toString());
        });
  }
  deleteDepartment() {
    var val = {
            DepartmentId:this.DepartmentId,
            DepartmentName: this.DepartmentName
    }
     this.service.deleteDepartment(val).subscribe(res => {
     alert(res.toString());
    });

  }
  }
