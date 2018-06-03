import { Component, OnInit } from '@angular/core';
import{Router, ActivatedRoute} from '@angular/router'
import{Location} from '@angular/common'
import{MarvelService} from '../marvel.service'
@Component({
  selector: 'app-transtype',
  templateUrl: './transtype.component.html',
  styleUrls: ['./transtype.component.css']
})
export class TranstypeComponent implements OnInit {
type='labe3';
typ:string;
constructor(private router:Router,private _location:Location,private service:MarvelService,private route:ActivatedRoute) {

 }

ngOnInit() {
document.getElementById(this.type).click();

  }
back():void{
this._location.back();
}
settransetype(typ,labe):void{
  document.getElementById(this.type).style.color="black"
  this.type=labe;
  document.getElementById(this.type).style.color="blue"
  this.typ=typ;
}
confirm():void{
this.service.settrsnstype(this.typ);
this.router.navigate(['/details1/'+this.service.getid()])
}
}
