import { Component } from '@angular/core';
import { ShowDepComponent } from "./show-dep/show-dep.component";
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-department',
    standalone: true,
    templateUrl: './department.component.html',
    styleUrl: './department.component.css',
    imports: [ShowDepComponent,RouterOutlet ,NgFor],
})
export class DepartmentComponent {
  

}
