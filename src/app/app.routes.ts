import { Routes } from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import {DepartmentComponent} from './department/department.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'employee',component:EmployeeComponent},
    {path:'department',component:DepartmentComponent},
    {path:'login',component:LoginComponent},
    {path: '**',redirectTo:'PageNotFoundComponent'} 
];
