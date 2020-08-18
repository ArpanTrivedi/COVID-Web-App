import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CovidServiceService } from 'src/app/service/covid-service.service';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-searchcountry',
  templateUrl: './searchcountry.component.html',
  styleUrls: ['./searchcountry.component.css']
})
export class SearchcountryComponent implements OnInit {

  country:string;
  result:any;

  con:string;

  constructor
  (
    private toast:ToastrService,
    private covid:CovidServiceService,
    private dataservice:DataserviceService,
    private route:Router
  ) { }

  ngOnInit(): void {
    if(this.dataservice.dataFromService){
      this.covid.selectCountry(this.dataservice.dataFromService).subscribe((resp:any) => {
        this.result = resp;
        this.toast.success(`${this.dataservice.dataFromService} details is`,"",{
          closeButton:true
        })
      },(err) => {
        this.toast.error(err.message,"",{
          closeButton:true
        });
      });
    }
  }




}
