import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
 
@Component({
selector: 'app-liquors',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(
private authenticationService:AuthenticationService
){
}
 
email: string;
password: string;
 
signUp() {
this.authenticationService.SignUp(this.email, this.password);
this.email = '';
this.password = '';
}
 
signIn() {
this.authenticationService.SignIn(this.email, this.password);
this.email = '';
this.password = '';
}
 
signOut() {
this.authenticationService.SignOut();
}
 
}