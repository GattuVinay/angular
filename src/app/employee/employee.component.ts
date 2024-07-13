import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowEmpComponent } from "./show-emp/show-emp.component";
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-employee',
    standalone: true,
    templateUrl: './employee.component.html',
    styleUrl: './employee.component.css',
    imports: [RouterOutlet, ShowEmpComponent,NgFor]
})
export class EmployeeComponent {

}
