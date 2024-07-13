import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule, NgFor,NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from "./login/login.component";
import { GoogleLoginProvider, SocialLoginModule, SocialUser } from '@abacritt/angularx-social-login';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { GoogleSigninButtonModule,FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { SharedService } from './shared.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        NgFor,
        CommonModule,
        RouterLink,
        RouterLinkActive,
        FormsModule,
        LoginComponent,
        SocialLoginModule,
        GoogleSigninButtonModule,
    ],
})
export class AppComponent implements OnInit  {
[x: string]: any;
  title = 'angular';
  user !: SocialUser ;
  loggedIn!: boolean ;
  mobileNumber: any;

constructor(private route: Router,private authService: SocialAuthService,private service :SharedService) { }


// ngOnInit() {
//   this.authService.authState.subscribe(observerOnNext : (user:SocialUser):void => {
//     console.log(user)
//     this.user = user;
//     this.loggedIn = (user != null);
//   });
// }

ngOnInit() {
  console.log("init")
  this.authService.authState.subscribe((user) => {
    this.user = user;
    this.loggedIn = (user != null);
    this.signInWithGoogle();
    // this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    // this.route.navigate(['/department']);
    console.log(user ,GoogleLoginProvider.PROVIDER_ID )
  });
}

signInWithGoogle(): void {
  this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
   this.route.navigate(['/department']);
  console.log(GoogleLoginProvider.PROVIDER_ID)

  

}
signOut(): void {
  this.authService.signOut();
  this.route.navigateByUrl('/employee');
}

onBtnEmpClick() {
  // Navigate to the Employee  component
  this.route.navigateByUrl('/employee');
  
  }

onBtnDepClick() {
    // Navigate to the  Department component
  this.route.navigate(['/department']);
  
  }


 whatsUp()
  {
    this.route.navigate(['/login']);
    
  }


}



