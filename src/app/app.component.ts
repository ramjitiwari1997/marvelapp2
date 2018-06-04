import { Component } from '@angular/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation',[


      transition('1=>3,3=>6,5=>6',[
        style({height:'!'}),
        query(':enter',style({transform: 'translateX(100%)'})),
        query(':enter,:leave',style({position:'absolute',top:0,left:0,right:0,bottom:0}),{optional:true}),
        group([
          query(':enter',[animate('0.3s cubic-bezier(.35,0,.25,1)',style({position:'fixed',transform: 'translateX(0%)'}))]),
          query(':leave',[animate('0.3s cubic-bezier(.35,0,.25,1)',style({position:'fixed',transform: 'translateX(-100%)'}))],{optional:true})
        ])
      ]),
      transition('3=>1,4=>3,5=>1,6=>5,6=>3',[
        style({height:'!'}),
        query(':enter',style({transform: 'translateX(-100%)'})),
        query(':enter,:leave',style({position:'absolute',top:0,left:0,right:0,bottom:0}),{optional:true}),
        group([
          query(':enter',[animate('0.3s cubic-bezier(.35,0,.25,1)',style({position:'fixed',transform: 'translateX(0%)'}))]),
          query(':leave',[animate('0.3s cubic-bezier(.35,0,.25,1)',style({position:'fixed',transform: 'translateX(100%)'}))],{optional:true})
        ])
      ]),
      transition('3=>4,5=>4',[
        style({height:'!'}),
        query(':enter',style({transform: 'translateY(100%)'})),
        query(':enter,:leave',style({position:'fixed',top:0,left:0,right:0,bottom:0}),{optional:true}),
        group([
          query(':enter',[animate('0.3s cubic-bezier(.35,0,.25,1)',style({transform: 'translateY(0%)'}))]),
         query(':leave',[animate('0.2s cubic-bezier(.35,0,.25,1)',style({opacity:.2,transform: 'translateY(0%)'}))],{optional:true})
        ])
      ]),
      transition('4=>5',[
        style({height:'!'}),
        query(':enter',style({transform: 'translateY(-100%)'})),
        query(':enter,:leave',style({position:'fixed',top:0,left:0,right:0,bottom:0}),{optional:true}),
        group([
          query(':enter',[animate('0.2s cubic-bezier(.35,0,.25,1)',style({transform: 'translateY(0%)'}))]),
         query(':leave',[animate('0.2s cubic-bezier(.35,0,.25,1)',style({opacity:.2,transform: 'translateY(0%)'}))],{optional:true})
        ])
      ]),
      
    ])
  ]
})
export class AppComponent {
  getDepth(outlet) {
    return outlet.activatedRouteData['depth'] || 1;
  }

}
