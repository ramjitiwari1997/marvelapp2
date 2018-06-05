import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-fleet1',
  templateUrl: './fleet1.component.html',
  styleUrls: ['./fleet1.component.css']
})
export class Fleet1Component implements OnInit {

  constructor(private router:Router,private location:Location) { }

  ngOnInit() {
  }
  back():void{
    this.location.back();
    }
more():void{
  this.router.navigate(['/fleet2'])
}
submit():void{
  this.router.navigate(['inventory'])
}
}
