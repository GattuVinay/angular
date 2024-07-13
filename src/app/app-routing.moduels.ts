import { NgModule } from "@angular/core";   
import { RouterModule, Routes } from "@angular/router";
import {EmployeeComponent} from './employee/employee.component'
import {DepartmentComponent} from './department/department.component'
import { routes } from "./app.routes";
import { SocialAuthService, SocialAuthServiceConfig } from "@abacritt/angularx-social-login";



const route : Routes = [
    {path : 'employee',component :EmployeeComponent},
    {path : 'department',component :DepartmentComponent},
   
];

@NgModule ({
    imports : [RouterModule.forRoot(routes),
    ],
    providers: [
        {
        provide: 'SocialAuthServiceConfig',
        useValue: {
        autoLogin: false,
        } as SocialAuthServiceConfig,
        }
        ],
    exports : [RouterModule]
})

export class AppRoutingModule {

}