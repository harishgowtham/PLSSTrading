import { Router } from '@angular/router';
//import { AuthService } from './../../serv
import { LoginApiServiceService } from './service/login-api-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  faLock = faLock;
  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });
  constructor( private service: LoginApiServiceService, private router: Router) {}

  ngOnInit(): void {
    // if (this.auth.isLoggedIn()) {
    //   this.router.navigate(['admin']);
    // }
  }
  onSubmit(): void {
    let loginReq = { userName: this.loginForm.value.userName, password: this.loginForm.value.password };

    this.service.login(loginReq).subscribe(
      response => { 
        
        if(response == null){
          alert("Invalid User name or Password entered.");
          //this.router.navigate(['/login'])
          this.router.navigate(['/admin'])
        } else {
          this.router.navigate(['/admin'])
        }
        
      }
      //error: (err) => { console.error(err.message) },
      
      
      //complete: () => { console.log(),this.router.navigate(['/admin']) }
    );
  
    //this.router.navigate(['/admin']);
  //   if (this.loginForm.valid) {
  //     this.auth.login(this.loginForm.value).subscribe(
  //       (result) => {
  //         console.log(result);
  //         this.router.navigate(['/admin']);
  //       },
  //       (err: Error) => {
  //         alert(err.message);
  //       }
  //     );
  //   }
  // }
  }
}
