import { Component,Input,OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { SharedService } from '../../shared.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { File } from 'buffer';

@Component({
  selector: 'app-add-edit-emp',
  standalone: true,
  imports: [FormsModule,CommonModule,NgFor],
  templateUrl: './add-edit-emp.component.html',
  styleUrl: './add-edit-emp.component.css'
})
export class AddEditEmpComponent implements OnInit,OnChanges {
sharedService : any;
selectedFile: File | null = null;

  constructor(private service : SharedService)
  {

  }
  EmployeeList : any =[];
  @Input() Emp : any;
  @Input() mode!:string;
  EmployeeId ! : string ;
  EmployeeName!: string;
  Department! : string;
  DateOfJoining! :string;
  PhotoField !:string 
  PhotoFilePath !: string;

   ngOnInit() : void 
   {
    this.EmployeeId = this.Emp.id;
    this.EmployeeName = this.Emp.name;
    this.Department = this.Emp.department;
    this.DateOfJoining = this.Emp.dateofjoining;
    this.PhotoField = this.Emp.photo;
   }

   refreshEmpList()
   {
    this.service.getEmppList().subscribe(data => 
    {
      this.EmployeeList=data;
    });
   }

   

   ngOnChanges(): void {
    this.EmployeeId = this.Emp.id;
    this.EmployeeName = this.Emp.name;
    this.Department = this.Emp.department;
    this.DateOfJoining = this.Emp.dateofjoining;
    this.PhotoField = this.Emp.photo;
   }
  
  addEmployee()
   {
    try{
    var val = {EmployeeId :this.EmployeeId,
                 EmployeeName :this.EmployeeName,
                 Department:this.Department,
                 DateofJoining : this.DateOfJoining,
                //  PhotoField : this.PhotoField
            };
      this.service.addEmployee(val).subscribe(res => {
        alert(res.toString());
          });
  }
  catch(e)
  {
   console.log("Exception",e)
  }
  }  

  updateEmployee()
  {    
   var  val = {EmployeeId :this.EmployeeId,
                EmployeeName :this.EmployeeName,
                Department:this.Department,
                DateofJoining : this.DateOfJoining,
                PhotoField : this.PhotoField
              };
        this.service.updateEmployee(val).subscribe(res => {
           alert(res.toString());
          
        });

        this.refreshEmpList(); 
    }

  deleteEmployee() {
    var val = {
            EmployeeId:this.EmployeeId,
            EmployeeName: this.EmployeeName
    }
     this.service.deleteEmployee(val).subscribe(res => {
     alert(res.toString());
    });

  }

  // uploadPhoto(event:any)
  // {
  //   var file = event.Emp.target.files[0];
  //   const formData : FormData =new FormData();
  //   formData.append('uploadedFile',file,file.name);

  //   this.service.UploadPhoto(formData).subscribe(data  => 
  //   {
  //     this.PhotoField=data.toString();
  //     this.PhotoFilePath =this.service.PhotoUrl+this.PhotoField;
  //   })
  
  // }

  
  uploadPhoto() {
    if (this.selectedFile==null) {
      this.service.UploadPhoto(this.selectedFile).subscribe(
        (response) => {
          console.log('File uploaded successfully:', response);
          // Handle success (e.g., show a success message)
        });
    }
  }

  }
