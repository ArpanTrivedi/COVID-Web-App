import { Component, OnInit } from '@angular/core';
import { CovidServiceService } from 'src/app/service/covid-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-worldreport',
  templateUrl: './worldreport.component.html',
  styleUrls: ['./worldreport.component.css']
})
export class WorldreportComponent implements OnInit {

  result:any;
  constructor
  (
    private covid:CovidServiceService,
    private toast:ToastrService
  ) { }

  ngOnInit(): void {
    this.covid.worldReport().subscribe((result:any) => {
      this.result = result;
      this.toast.success("World report ","",{
        closeButton:true
      });
    },(err) => {
      this.toast.error(err.message, "" ,{
        closeButton:true
      });
    });
  }

}
