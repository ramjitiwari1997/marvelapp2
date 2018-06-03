import { Component, OnInit } from '@angular/core';
import {Data} from './../data'
import{trigger,state,transition,style,animate} from '@angular/animations'
import { Router } from '@angular/router';
import {MarvelService} from './../marvel.service'
@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations:[
    trigger('sidenav',[
      state('in', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      transition('in => out', animate('50ms ease-in-out')),
      transition('out => in', animate('50ms ease-in-out'))
    ]),
    trigger('content',[
      state('inactive', style({
        display: 'none',
      })),
      state('active', style({ 
       display: 'block',
      })),

    ]),
  ]
})
export class TodosComponent implements OnInit {
  
  constructor(private router:Router,private service:MarvelService) {
   }
  ngOnInit() {
    
  }
  data=this.service.getdata();
  //data=new Data();
  inventories=this.data.inventories;
 
  getColor(priority):string{
    if(priority==='LOW')
    return '#01C853'
    else if(priority==='HIGH')
    return '#D73421'
    else
    return '#FF9000'

}
menuState:string = 'in';
contentState:string='inactive'
toggleMenu(){
  var c=document.getElementsByClassName('navbar-fixed-top');
  this.menuState = this.menuState === 'out' ? 'in' : 'out';
  this.contentState = this.contentState === 'active'? 'inactive': 'active';
}
closeSide(){
  this.menuState='in';
  this.contentState='inactive'

}
detail(serviceId):void{
  this.service.setid(serviceId)
  this.router.navigate(['/details/'+serviceId])
}
}
