import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from  '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,          //ngif ngfor
    FormsModule,
    RouterModule.forChild([
      {path:'sign-up',component: SignupComponent}
    ])
  ],
  declarations: [LoginComponent,SignupComponent]
})
export class UserModule { }
