import { Injectable } from '@angular/core';
import {Data} from './data'

@Injectable()
export class MarvelService {
  id:string;
  transtype='Voult-type'
  constructor() { }
 setid(id):void{
   this.id=id;
 }
 getdata():Data{
   return new Data();

 }
 getid():string{
   return this.id;
 }
 settrsnstype(type):void{
   this.transtype=type;
 }
 gettrsnstype():string{
   return this.transtype;
 }

}
