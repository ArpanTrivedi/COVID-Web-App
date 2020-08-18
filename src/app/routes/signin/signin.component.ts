import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor
  (
    private auth:AuthService,
    private route:Router,
    private toast:ToastrService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    const {email,password} = f.form.value;
    this.auth.signin(email,password)
    .then((res) => {
      this.route.navigateByUrl("home");
      this.toast.success(`${email} is successfully signIn`);
    })
    .catch((err) => {
      this.toast.error(err.message,"",{
        closeButton:true
      });
    })
  }

}
