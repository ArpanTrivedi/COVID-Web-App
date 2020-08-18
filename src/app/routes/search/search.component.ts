import { Component, OnInit } from '@angular/core';
import { CovidServiceService } from 'src/app/service/covid-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  country:string;
  result:any;
  constructor
  (
    private covid:CovidServiceService,
    private toast:ToastrService
  ) { }

  ngOnInit(): void {
  }

  submit(){
    if(this.country){
      this.covid.selectCountry(this.country).subscribe((resp:any) => {
        this.result = resp;
        this.toast.success(`${this.country} details is`,"",{
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
