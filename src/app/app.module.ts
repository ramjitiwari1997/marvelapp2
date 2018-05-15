import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {RouterModule}from '@angular/router'


import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      {
     path:'home',component:TodosComponent,pathMatch:'full'
    },
    {
      path:'',component:TodosComponent,pathMatch:'full'
     },
    {
      path:'details/:id',component:DetailsComponent,pathMatch:'full'
    },
  

  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
