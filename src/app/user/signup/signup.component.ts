import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { ChatService } from '../../chat.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public firstName: any;
  public lastName: any;
  public mobileNumber: any;
  public email: any;
  public password: any;
  public apiKey:any="YzYyODdhNzY1ODgxNGQzNGEzOTJlYjgwMDAwN2U1ODg5YmJhNmRiMzdjMTI2MGFmZjM3MmI1OTgyMTcyYzRmNWVlOTEyNDdmODQzMzZlN2ZkZmY4MzkzMTk2MzU0NTNmOTBkOTYxYmRiZjZiZWRhZWE1YTVkZjQ0YzQ5NDk3YTkwOA==";


constructor(public chatService: ChatService ,
    public router: Router,
    private toastr: ToastrService
    ) { 
    }

  ngOnInit() {
  }

  public goToSignIn: any = () => {

    this.router.navigate(['/']);

  } // end goToSignIn

  public signupFunction: any = () => {

    if (!this.firstName) {
      this.toastr.warning('enter first name')
    } else if (!this.lastName) {
      this.toastr.warning('enter last name')
    } else if (!this.mobileNumber) {
      this.toastr.warning('enter mobile')
    } else if (!this.email) {
      this.toastr.warning('enter email')
    } else if (!this.password) {
      this.toastr.warning('enter password')  
    } else if (!this.apiKey) {
      this.toastr.warning('Enter your API key')
    } else {

      let data = {
        firstName: this.firstName,
        lastName: this.lastName,
        mobileNumber: this.mobileNumber,
        email: this.email,
        password: this.password,
        apiKey: this.apiKey
      }

      console.log("SignUp data:"+JSON.stringify(data));

      this.chatService.signupFunction(data).subscribe((apiResponse) => {

          if (apiResponse.status === 200) {

            this.toastr.success('Signup successful');
            console.log("Signup successful");

            setTimeout(() => {

              this.goToSignIn();

            }, 2000);

          } else {

            this.toastr.error(apiResponse.message);

          }

        }, (err) => {

          this.toastr.error('some error occured');

        });

    } // end condition

  } // end signupFunction

}
