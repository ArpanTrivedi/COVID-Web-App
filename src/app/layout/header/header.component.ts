import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {auth} from "firebase/app";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email = null;
  constructor
  (
    private authS:AuthService,
    private toast:ToastrService,
    private route:Router
  ){
      authS.getUser().subscribe((user) => {
        this.email = user?.email;
        console.log(this.email);
      });
   }

  ngOnInit(): void {
  }

  logout(){
    this.authS.signout()
    .then((resp) => {
      this.email = null;
      this.toast.success("signout success","",{
        closeButton:true
      });
      this.route.navigateByUrl("signin");
    })
    .catch((err) => {
      this.toast.error(err.message, "" ,{
        closeButton:true
      });
    });
  }

  signIn() {
    const provider =  new auth.GoogleAuthProvider();
    this
        .authS
        .signInWithGoogle(provider)
        .then((res) => {
          this.toast.success("SignIn Done");
          this.route.navigateByUrl("home");
        })
        .catch(err => this.toast.error(err.message));
  }

}
