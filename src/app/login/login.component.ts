import { Component,Input,OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
      
  
    constructor(private service : SharedService) {}
    mobileNumber : any;
    message :any;
    
    whatsUp(mobileNumber = this.mobileNumber,message=this.message)
    {
        debugger
        this.service.getWhatsup(mobileNumber,message).subscribe(data=>
               data
        )
    }
}