import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {RouterModule}from '@angular/router'


import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { DetailsComponent } from './details/details.component';
import { TranstypeComponent } from './transtype/transtype.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    DetailsComponent,
    TranstypeComponent
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
  

  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
