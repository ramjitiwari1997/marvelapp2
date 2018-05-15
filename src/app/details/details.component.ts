import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {Data} from './../data';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  serviceId="hello";
  data:{};
  invent;
  detail:{};
  constructor(private route:ActivatedRoute,private router:Router) { }
  ngOnInit() {
  this.data=new Data();
  this.invent=(new Data()).inventories.data;
    this.route.params.subscribe( params => {
     this.serviceId=params.id;
    });
    this.invent.forEach(elem => {
      if(elem.serviceId===this.serviceId)
      this.detail=elem;
    });
  }
  back():void{
    //console.log(this.invent)
      this.router.navigate(['/home'])
  }

}
