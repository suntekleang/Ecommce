import { AuthService } from './../../auth/auth.service';
import {Component,OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, 
  FormGroup, AbstractControl, FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  form: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  
  errorMessage = null;
  constructor(private fb: FormBuilder, 
    private auth: AuthService,
    private router: Router
    ) {
      if(auth.canActive){
        this.router.navigate(['/apps'])
      }
     }

  ngOnInit() {
    this.form = this.fb.group({
      email: [null,Validators.required],
      password:[null,Validators.required]
    })
    this.email = this.form.controls["email"];
    this.password = this.form.controls["password"];
  }

  login(f: any){
    if(this.form.valid){
      console.log(f)
      this.auth.signInWithEmail(f.email, f.password)
      .then(()=>{
        this.router.navigate(['/apps'])
      }).catch(error=>{
        this.errorMessage = "Invalid your email and password.";
      })
    }
  }



}
