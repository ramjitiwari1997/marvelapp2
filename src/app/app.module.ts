import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {RouterModule}from '@angular/router'


import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { DetailsComponent } from './details/details.component';
import { TranstypeComponent } from './transtype/transtype.component';
import {MarvelService} from './marvel.service';
import { FleetComponent } from './fleet/fleet.component';
import { Fleet1Component } from './fleet1/fleet1.component'


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    DetailsComponent,
    TranstypeComponent,
    FleetComponent,
    Fleet1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:TodosComponent,pathMatch:'full',data:{depth:1}},
    {
      path:'',component:TodosComponent,pathMatch:'full',data:{depth:1}
     },
    {
      path:'details/:id',component:DetailsComponent,pathMatch:'full',data:{depth:3}
    },
    {
      path:'transtype',component:TranstypeComponent,pathMatch:'full',data:{depth:4}
    },
    {
      path:'details1/:id',component:DetailsComponent,pathMatch:'full',data:{depth:5}
    },
    {
      path:'fleet',component:FleetComponent,pathMatch:'full',data:{depth:6}
    },
    {
      path:'fleet1',component:Fleet1Component,pathMatch:'full',data:{depth:7}
    },

  

  ])
  ],
  providers: [MarvelService],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
