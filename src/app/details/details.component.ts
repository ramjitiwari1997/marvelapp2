import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {Data} from './../data';
import {MarvelService} from './../marvel.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  serviceId="hello";
  data:Data;
  invent;
  detail:{};
  constructor(private route:ActivatedRoute,private router:Router,private service:MarvelService) { }
  ngOnInit() {
  this.data=this.service.getdata();
  this.invent=(this.data).inventories.data;
    this.route.params.subscribe( params => {
     this.serviceId=params.id;
     this.service.setid(params.id);
    });
    this.invent.forEach(elem => {
      if(elem.serviceId===this.serviceId)
      this.detail=elem;
    });
  }
  transetype=this.service.gettrsnstype();
  back():void{
      this.router.navigate(['/home'])
  }
  chooseVolt():void{
    this.router.navigate(['/transtype'])
  }
  upload():void{
    this.router.navigate(['/fleet'])
  }

}
