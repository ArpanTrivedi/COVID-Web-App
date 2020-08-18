import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CovidServiceService } from 'src/app/service/covid-service.service';
import { DataserviceService } from 'src/app/service/dataservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  array:[];
  country:string;
  constructor
  (
    private toast:ToastrService,
    private covid:CovidServiceService,
    private dataservice:DataserviceService,
    private route:Router
  ) { }

  ngOnInit(): void {
    this.covid.allCountry().subscribe((resp:[]) => {
      this.toast.success("Covid positive country list","",{
        closeButton:true
      });
      this.array = resp;
    },(err) => {
      this.toast.error(err.message,"",{
        closeButton:true
      });
      this.array = [];
    })
  }

  onClick(inputValue){
    this.dataservice.dataFromService = inputValue;
    this.route.navigateByUrl("search");
  }



  submit(){

  }

}
