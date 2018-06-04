import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.css']
})
export class FleetComponent implements OnInit {

  constructor(private router:Router,private location:Location) { }

  ngOnInit() {
  }
back():void{
this.location.back();
}
showname(file: HTMLInputElement):void{
  let name = file.value;
  this.router.navigate(['/fleet1'])
}
}
