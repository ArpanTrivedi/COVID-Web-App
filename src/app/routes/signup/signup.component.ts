import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email:string;
  password:string;
  constructor
  (
    private route:Router,
    private auth:AuthService,
    private toast:ToastrService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    const {email,password} = f.form.value;
    this.auth.signup(email,password)
    .then((res) => {
      this.route.navigateByUrl("signin");
      this.toast.success(`${email} is successfully signup`);
    })
    .catch((err) => {
      this.toast.error(err.message,"",{
        closeButton:true
      });
    })
  }

}
